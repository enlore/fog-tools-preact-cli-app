// @flow
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { h, Component } from 'preact';
import connector from '../../connector'

import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

// import SearchGroup from '../../components/searchgroup'
import SearchBar from '../../components/searchbar'
import Checkbox from '../../checkbox'

// careful with these. with may render calls across a set of man instances
// (think table rows), this could get expensive what with making functions
// all over the place
const onInputFactory = ({ setIndexTransitionFired, setSearchString, search }) => e => {
  setIndexTransitionFired(true)
  setSearchString(e.target.value)
  search()
}

const Search = ({
    content: { index },
  }) => (
  <div class="searchScreen">
    <NavBar />


    { !showResults &&
      <div class="searchScreen__header">
        <div class="contentWrap">
          <h1 class="f-center"> App </h1>
          <SearchBar
            placeholder="Search for relevant results"
            style="max-width: 800px; margin: 0 auto;" />
        </div>
      </div>
    }

    { showResults ?
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
                      <div class="tagBar__tag" onClick={ ev => removeFilterTag(tag) }>
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
                timeout={ 240 }
                onExited={ () => console.info('ok filterMenu exited') }
              >
                <div class="jurisdictionFilterMenu">
                  <h2> Federal Courts </h2>
                  { Object.keys(courts.federal).map(k =>
                    (<JurisdictionGroup
                      inFilters={ inFiltersFactory(currentJurisdictionFilters) }
                      toggleFilterTag={ toggleFilterTag }
                      court={courts.federal[k]}
                    />)
                    ) }

                  <h2> State Courts </h2>
                  { Object.keys(courts.state).map(k =>
                    (<JurisdictionGroup
                      inFilters={ inFiltersFactory(currentJurisdictionFilters) }
                      toggleFilterTag={ toggleFilterTag }
                      court={courts.state[k]}
                    />)
                  ) }
                </div>
              </CSSTransition>
            </div>
            {/*
                <select>
                  <option value="all"> All </option>
                  <option value="TN"> TN </option>
                </select>
             */}

            <div class="resultsPane__count">
              <span> Showing: { currentSearchResults.length || 0 } results </span>
            </div>
          </div>

        <div class="contentWrap">
          <div class="searchResults">
            { currentSearchResults.map((r, i) => (

              <Link to={ `/entity/${ 'some-entity-id-923498234' }` } >
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
                      <div class="searchResult__count">
                        <span> search results ({ 7 }) </span>
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
      :
      <div class="uploadPane">
        <div class="contentWrap">
          <div class="uploadPane__title">
            <h3 class="f-center">
              Or need to build a case?  Upload your documents here to get
              started.
            </h3>
          </div>

          <div class="uploadPane__control">
            <div class="uploadPane__controlIcon">
              <img src="/assets/plus-icon/plus-icon.png" />
            </div>

            <div class="uploadPane__controlLabel">
              <span> upload documents here (pdf, docx) </span>
            </div>
          </div>

          <div class="uploadPane__continue">
            <img src="/assets/chevron-down/chevron-down.png" />
          </div>
        </div>
      </div>
    }

    <Footer />
  </div>
)

export default connector('content', Search)
