import { h, Component } from 'preact';
import connector from '../../connector'

import { Redirect, Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import Checkbox from '../../components/checkbox'
import NavBar from '../../components/navbar';
import SearchBar from '../../components/searchbar'

// todo probably bring in lodash
function inFilters (filters: Array<string>, jurisdiction: string): bool {
  return !!~filters.indexOf(jurisdiction)
}

function inFiltersFactory (filters: Array<string>): (string) => bool {
  return function f (jurisdiction: string) {
    return inFilters(filters, jurisdiction)
  }
}

function JurisdictionGroup ({ court, inFilters, toggleFilterTag }) {
  return (
    <div class="jurisdictionGroup">
      <Checkbox
        val={court}
        checked={ inFilters(court.label) }
        onChecked={ court => {
          console.info('checked', court)
          toggleFilterTag(court.label)
        } }
      />

    { court.children ?
        court.children.map(c => (
          <Checkbox
            key={ `key-court-child-${c.label}` }
            class="jurisdictionGroup__child"
            val={c}
            checked={ inFilters(c.label) }
            onChecked={ court => {
              console.info('checked inner', court)
              toggleFilterTag(court.label)
            } }
          />
        ))
        : null
    }
    </div>
  )
}


const Cases = ({
    content: { index },
    showResults,
    setSearchString,
    search,
    currentSearchResults,
    currentJurisdictionFilters,
    removeFilterTag,
    showJurisdictionFilterMenu,
    setShowJurisdictionFilterMenu,
    courts,
    setFilter,
    toggleFilterTag
}) => (
  <div class="searchScreen">

    { showResults &&
      <div class="resultsPane">

        <div class="resultsPane__controls">
          <div class="resultsPane__sortSelectContainer">
            <span class="cc-steel"> Sort by: </span>

            <select class="resultsPane__sortSelect cc-steel">
              <option value="relevance"> Relevance </option>
              <option value="other-criterion"> Other Criterion </option>
              <option value="other-criterion"> Other Criterion </option>
            </select>
          </div>

          <div class="resultsPane__jurisdictionFilterContainer">
            <div class="u-o-hidden">
              <span class="cc-steel"> Jurisdiction: </span>

              <div class="tagBar">
                <div class="tagBar__tags">
                  <div class="tagBar__emptyButtonContainer">
                    <button class="tagBar__emptyButton" onClick={ ev =>
                        setShowJurisdictionFilterMenu(!showJurisdictionFilterMenu)
                    }> + </button>
                  </div>

                  { currentJurisdictionFilters.map(tag => (
                    <div class="tagBar__tag" key={ `key-filter-tag-${tag}` } onClick={ ev => removeFilterTag(tag) }>
                      <div class="tagBar__tagLabel"> <span> { tag } </span> </div>
                      <div class="tagBar__tagRemove"> <span> x </span> </div>
                    </div>
                  )) }
                </div>
              </div>
            </div>

            <CSSTransition
              in={ showJurisdictionFilterMenu }
              classNames="ani-filterMenu"
              timeout={ 220 }
              onExited={ () => console.info('ok filterMenu exited') }
            >
              <div class="jurisdictionFilterMenu">
                <div class="jurisdictionFilterMenu__federalGroup">
                  <h3> Federal Courts </h3>
                    { Object.keys(courts.federal).map((k, i) =>
                      (<JurisdictionGroup
                        key={ `key-fed-${i}` }
                        inFilters={ inFiltersFactory(currentJurisdictionFilters) }
                        toggleFilterTag={ toggleFilterTag }
                        court={courts.federal[k]}
                      />)
                    ) }
                </div>

                <div class="jurisdictionFilterMenu__stateGroup">
                  <h3> State Courts </h3>
                  { Object.keys(courts.state).map((k, i) =>
                    (<JurisdictionGroup
                      key={ `key-state-${i}` }
                      inFilters={ inFiltersFactory(currentJurisdictionFilters) }
                      toggleFilterTag={ toggleFilterTag }
                      court={ courts.state[k] }
                    />)
                  ) }
                </div>
              </div>
            </CSSTransition>
          </div>

          <div class="resultsPane__count">
            <span> Showing: { currentSearchResults.length || 0 } results </span>
          </div>
        </div>

        <div class="contentWrap">
          <div class="searchResults">
            { currentSearchResults.map((r, i) => (

              <Link key={ `case-result-${i}` } to={ `/case/${ 'some-case-id-923498234' }` } >

                <div class="searchResult">
                  <div class="searchResult__fancyBar"></div>
                  <div class="searchResult__left">
                    {/* <span> { i + 1 } </span> */}
                    <h3 class="searchResult__title"> {r.title} </h3>
                    <h3 class="searchResult__subtitle"> {r.subtitle} </h3>

                    <p class="f-sm"> Relevant Passages </p>

                    <p class="searchResult__body"> {r.text} </p>

                    <a class="searchResult__readMoreLink" href="">
                      read case doc
                    </a>
                  </div>

                  <div class="searchResult__right">
                    { true &&
                      <div class="searchResult__citedCasesCount">
                        <span> Cited Cases ({ 7 }) </span>
                      </div>
                    }
                  </div>

                </div>
              </Link>
              ))
            }
          </div>

        </div>
      </div>
    }
  </div>
)

export default connector(
  [
    'content',
    'showResults',
    'currentSearchResults',
    'currentJurisdictionFilters',
    'showJurisdictionFilterMenu',
    'courts'
  ]
  , Cases)
