// @flow
import { h, Component } from 'preact';
import connector from '../../connector'

import { CSSTransition } from 'react-transition-group'
import { Redirect, Link } from 'react-router-dom'

// import SearchGroup from '../../components/searchgroup'
import SearchBar from '../../components/searchbar'
import Checkbox from '../../components/checkbox'

// careful with these. with may render calls across a set of man instances
// (think table rows), this could get expensive what with making functions
// all over the place
const onInputFactory = ({ setIndexTransitionFired, setSearchString, search }) => e => {
  setIndexTransitionFired(true)
  setSearchString(e.target.value)
  search()
}


const Home = ({
    content: { index },
    showResults,
    setIndexTransitionFired,
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
  <div class="homeScreen">
    <header class="homeScreen__header">
      <div class="contentWrap">
        <h1 class="f-center"> BookLawyer</h1>
        <SearchBar
          placeholder="Search cases, statutes, and more"
          style="background-color: #f3f5f8; max-width: 800px; margin: 0 auto;" />
      </div>
    </header>

    <section class="blueBgOverlap">
      <div class="contentWrap">
        <div class="homeTagline">
          <h2 class="f-center">{ index.headline }</h2>
          <p class="f-lg f-center">{ index.tagline }</p>

          <img class="homeCallout__image" src="/assets/monitor/monitor.png" />
        </div>
      </div>

      <div class="blueBgOverlap__panel"></div>
    </section>

    <section class="calloutContainer">
      <div class="contentWrap">
        <div class="homeCallout homeCallout--iconsFirst">
          <img class="homeCallout__icon u-responsive u-margin-auto" src="/assets/open-book.png" />
          <h2 class="f-center"> Find the Law </h2>
          <p class="f-center"> Use our search function to find the cases relevant to you whether it’s academic study, building a case or general research. </p>
        </div>

        <div class="homeCallout homeCallout--icons">
          <img class="homeCallout__icon u-responsive u-margin-auto" src="/assets/scales.png" />
          <h2 class="f-center"> Annotate the Law </h2>
          <p class="f-center">Highlight key passages and subtext and share your insights for others to learn from and for your own personal records.</p>
        </div>

        <div class="homeCallout homeCallout--icons">
          <img class="homeCallout__icon u-responsive u-margin-auto" src="/assets/gavel-book.png" />
          <h2 class="f-center"> Build Your Cases </h2>
          <p class="f-center">Get ahead of the curve with your cases, find new angles to approach your cases and be armed with information to become a better litigator.</p>
        </div>
      </div>
    </section>

    <section class="productDetailContainer">
      <div class="productDetailHeader">
        <div class="contentWrap">
          <h1 class="f-center"> The BookLawyer Platform </h1>
        </div>
      </div>

      <div class="productDetail">
        <div class="contentWrap">
          <img class="productDetail__image u-responsive" src="/assets/product-detail-search.png" />

          <div class="productDetail__copy">
            <h3> BookLawyer Search </h3>

            <p>
              Use our search function to find the cases relevant to you whether
              it’s academic study, building a case or general research.
            </p>
          </div>
        </div>
      </div>

      <div class="productDetail productDetail--left">
        <div class="contentWrap">
          <img class="productDetail__image productDetail__image--left u-responsive" src="/assets/product-detail-case.png" />

          <div class="productDetail__copy productDetail__copy--left">
            <h3> View Relevant Cases </h3>

            <p>
              Highlight key passages and subtext and share your insights for
              others to learn from and for your own personal records.
            </p>
          </div>
        </div>
      </div>

      <div class="productDetail">
        <div class="contentWrap">
          <img class="productDetail__image u-responsive" src="/assets/product-detail-search-results.png" />

          <div class="productDetail__copy">
            <h3> Build Your Cases </h3>

            <p>
              Get ahead of the curve with your cases, find new angles to approach
              your cases and be armed with information to become a better
              litigator.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="studentAmbassadorCalloutContainer">
      <div class="studentCallout">
        <div class="contentWrap">
          <img class="studentCallout__image u-responsive" src="/assets/student-ambassador-guy.png" />

          <h2 class="f-center"> Student Ambassador Program </h2>

          <h3 class="f-center">
            BookLawyer is seeking current law students who are passionate about
            legal research, technology, and innovation.
          </h3>

          <Link class="studentCallout__cta" to="/student-ambassador">
            Learn More
          </Link>
        </div>
      </div>
    </section>

    <section class="signupCTAContainer">
      <div class="signupCTA">
        <div class="contentWrap">
          <h2 class="f-center"> Sign up for BookLawyer Today </h2>
          <p class="f-center">
            Something about helping lawyers find the law.  Be apart of the new
            platform for laywers to build their cases.
          </p>

          <div class="signupCTA__buttonContainer">
            <Link to="/sign-up" class="signupCTA__cta signupCTA__cta--pop"> Sign Up </Link>
            <Link to="/login" class="signupCTA__cta"> Log In </Link>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default connector(
  [
    'content',
    'showResults',
    'currentSearchResults',
  ], Home)
