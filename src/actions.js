// @flow
import Promise from 'promise-polyfill'
import type { SearchFilterKeys, SearchResult, State, Case } from './state'

import net from './net'

// construction
function zarr (len: ?number = 16): Array<number> {
  return Array(len).fill(0)
}

export function randString (len: ?number): string {
  const alphabet = '           abcdefghijklnpqrstuvxyzbfghijklmnpqrstuvwzbcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return zarr(len)
    .map(_ => alphabet[Math.floor(Math.random() * 103)])
    .reduce((acc, c) => acc += c, '')
}

export function randResults (count: ?number): Array<SearchResult> {
  return zarr(count).map(_ => ({ title: randString(36), subtitle: randString(48), text: randString(224) }))
}

// use of `any` type for arg to action object factory is only temporary
export default (store: any) => ({
  init (state: State) {
    console.info('hello from init action', state)

    net.get('https://httpbin.org/anything')
      .then(res => {
        console.info(res)
      })
    .catch(err => {
    })

    net.get('http://localhost:9000/test_paragraphs/paragraphs/_search', {
      body: { query: { match: { labels: 'testify' } } }
    })
    .then(res => {
      return res.hits.hits
    })
    .then(hits => {
      console.info(hits)

    })
    .catch(err => console.warn(err))
  },

  auth ({ hasAuth }: { hasAuth: boolean }): {| hasAuth: boolean |} {
    return { hasAuth: !hasAuth }
  },

  setSearchString (state: any, currentSearchString: string): { currentSearchString: string } {
    return { currentSearchString }
  },

  search ({ currentSearchString }: { currentSearchString: string }): Array<Promise> {
    return Promise
    .resolve(randResults(17))
    .then(results => ({
      currentSearchResults: results,
      caseResults: results,
      showResults: true,
      showingCase: results[0]
    }))
  },

  setFilter ({ resultsFilter}: { resultsFilter: string }, filter: SearchFilterKeys): { resultsFilter: string } {
    return { resultsFilter: filter }
  },

  resetIndexTransition ({ indexTransitionFired }: { indexTransitionFired: boolean }): { indexTransitionFired: boolean } {
    return { indexTransitionFired: false }
  },

  setIndexTransitionFired (state: any, fired: boolean): { indexTransitionFired: boolean } {
    return { indexTransitionFired: fired }
  },

  removeFilterTag (
    { currentJurisdictionFilters }: { currentJurisdictionFilters: Array<string>  },
    tag: string
  ): { currentJurisdictionFilters: Array<string> } {
    return { currentJurisdictionFilters: currentJurisdictionFilters.filter(t => t !== tag) }
  },

  addFilterTag (
    { currentJurisdictionFilters }: { currentJurisdictionFilters: Array<string>  },
    tag: string
  ): { currentJurisdictionFilters: Array<string> } {
    if (!!~currentJurisdictionFilters.indexOf(tag)) { // already in there
      return { currentJurisdictionFilters }
    } else {
      return { currentJurisdictionFilters: [...currentJurisdictionFilters, tag] }
    }
  },

  toggleFilterTag (
    { currentJurisdictionFilters }: { currentJurisdictionFilters: Array<string>  },
    tag: string
  ): { currentJurisdictionFilters: Array<string> } {
    if (!!~currentJurisdictionFilters.indexOf(tag)) { // already in there
      // no action reuse like this, need to pull actions out of literal def and import
      return { currentJurisdictionFilters: currentJurisdictionFilters.filter(t => t !== tag) }
    } else {
      return { currentJurisdictionFilters: [...currentJurisdictionFilters, tag] }
    }
  },

  setShowJurisdictionFilterMenu ({ showJurisdictionFilterMenu }: { showJurisdictionFilterMenu: boolean }, setTo: boolean): { showJurisdictionFilterMenu: boolean }{
    return { showJurisdictionFilterMenu: setTo }
  },

  toggleShowCaseOverviewContent (
    { showCaseOverviewContent }: { showCaseOverviewContent: bool }
  ): { showCaseOverviewContent: bool } {
    return { showCaseOverviewContent: !showCaseOverviewContent }
  },

  toggleShowCaseSummaries (
    { showCaseSummariesContent }: { showCaseSummariesContent: bool }
  ): { showCaseSummariesContent: bool } {
    return { showCaseSummariesContent: !showCaseSummariesContent }
  },

  toggleShowCaseCitedCases (
    { showCaseCitedCasesContent }: { showCaseCitedCasesContent: bool }
  ): { showCaseCitedCasesContent: bool } {
    return { showCaseCitedCasesContent: !showCaseCitedCasesContent }
  },

  setShowingCase (
    { showingCase }: { showingCase: Case },
    _case: Case
  ): { showingCase: Case } {
    return {
      showingCase: _case,
    }
  },

  // todo nullable showing?
  showNextCase (
    { showingCase, caseResults }: { showingCase: Case, caseResults: Array<Case> }
  ): { showingCase: Case, caseIndexOf: number } {
    let i = caseResults.indexOf(showingCase)

    if (i === caseResults.length - 1) {
      return { showingCase, caseIndexOf: i }
    } else {
      i++
      return { showingCase: caseResults[i], caseIndexOf: i }
    }
  },

  showPrevCase (
    { showingCase, caseResults }: { showingCase: Case, caseResults: Array<Case> }
  ): { showingCase: Case, caseIndexOf: number } {
    let i = caseResults.indexOf(showingCase)

    if (i === 0) {
      return { showingCase, caseIndexOf: i }
    } else {
      i--
      return { showingCase: caseResults[i], caseIndexOf: i }
    }
  }
})

    // curl -XGET "http://localhost:9200/test_paragraphs/paragraphs/_search" -H 'Content-Type: application/json' -d'
    // {
    // "query": {
    // "match": {
    // "labels": "testify"
    // }
    // }
    // }'
