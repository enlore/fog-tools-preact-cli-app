// @flow
import Promise from 'promise-polyfill'
import { randString, randResults } from '../util'

import { getProtected } from '../net'

export default {
  setSearchString (state: any, currentSearchString: string):
    { currentSearchString: string }
  {
    return { currentSearchString }
  },

  safeSearch ({ currentSearchString, accessToken }):
  {}
  {
    return safeGet('/search', { accessToken, query: currentSearchString })
      .then(results => {
        console.info(results)
      })
      .catch(err => { console.error(err) })
  },

  search ({ currentSearchString }:
    { currentSearchString: string }): Array<Promise>
  {
    return Promise
    .resolve(randResults(17))
    // .resolve("")
    .then(results => ({
      currentSearchResults: results,
      caseResults: results,
      showResults: true,
      showingCase: results[0]
    }))
  }
}
