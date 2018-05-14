// @flow
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import CollapseContent from '../../components/collapse'
import { CSSTransition, Transition } from 'react-transition-group'
import { h, Component } from 'preact';
import connector from '../../connector'

const Case = ({
  conent,
  currentSearchResults,
  currentJurisdictionFilters,
  showCaseOverviewContent,
  showCaseSummariesContent,
  showCaseCitedCasesContent,
  toggleShowCaseOverviewContent,
  toggleShowCaseSummaries,
  toggleShowCaseCitedCases,
  showNextCase,
  showPrevCase,
  caseIndexOf,
  showCaseSidebar,
  toggleShowCaseSidebar
}) => (
  <div class="caseScreen">
    { currentSearchResults.length > 0 &&
      <div class="caseCarousel">
        <div class="caseCarousel__content">
          <div class="caseCarousel__count">
            <span> case { caseIndexOf + 1 } of { currentSearchResults.length } </span>
        </div>

        <div class="caseCarousel__title">
          <span> CORSARO V. STOP AND SHOP </span>
        </div>
      </div>

      <div class="caseCarousel__controls">
        <div class="caseCarousel__left" onClick={ ev => showPrevCase() }>
          <img src="/assets/chevron-left-blue.png" />
        </div>

        <div class="caseCarousel__right" onClick={ ev => showNextCase() }>
          <img src="/assets/chevron-right-blue.png" />
        </div>
      </div>
    </div>
    }

    <div class="caseLayoutContainer">
      <CSSTransition
        timeout={ 124}
        appear={ true }
        in={ showCaseSidebar }

        classNames="ani-caseOverview"
      >
        <div class="caseOverview">
          <CollapseControl
            class="caseOverview__collapseControl"
            title="Case Overview"
            collapsed={ showCaseOverviewContent }
            toggleCollapse={ toggleShowCaseOverviewContent }/>

          <div class="caseOverview__collapseContent">
            <CollapseContent show={ showCaseOverviewContent }>

                <div class="caseContent__controls">
                  <div class="caseContent__bookmark"
                    onClick={ ev => console.info('case bookmarked') }>
                    <img src="/assets/bookmark.png" />
                  </div>

                  <div class="caseContent__sidebarToggle"
                    onClick={ toggleShowCaseSidebar }
                  >
                    <img src="/assets/case-sidebar-toggle.png" />
                  </div>
                </div>

                <div class="caseContent__header">
                  <p>
                    Appellate Division of the Supreme Court of New
                    York, Second Department. •  287 A.D.2d 678 (N.Y. App. Div. 2001)
                  </p>

                  <h1> { /* 'CORSARO V. STOP AND SHOP' */ currentSearchResults[caseIndexOf].title } </h1>

                  <h2>
                    {
                      //'[ VIRGINIA CORSARO, ET AL., APPELLANTS, V. STOP AND SHOP, INC., D/B/A FOODTOWN, RESPONDENT. ]'
                      currentSearchResults[caseIndexOf].subtitle
                    }
                </h2>
                </div>


                <div class="caseContent__keyPassages">
                  <div class="caseContent__popBar"></div>

                  <p class="caseContent__keyPassagesTitle cc-dark f-bold">
                    { 'Key Passages from this case (2):' }
                  </p>

                  <p class="caseContent__keyPassage cc-slate">
                    {
                      /*
                      “That the ice appeared brown and muddy, standing alone, is
                      insufficient to raise an issue of fact as to constructive notice
                      (see, Simmons v. Metropolitan Life Ins. Co., 84 N.Y.2d 972;
                      Grillo v. New York City Tr. Auth., 214 A.D.2d 648).”
                      */
                      currentSearchResults[caseIndexOf].text
                      }
                  </p>

                  <a class="caseContent__keyPassagesMoreLink" href=""> View All Key Passages </a>
                </div>

                <div class="caseContent__body f-p">
                  <p>
                    ORDERED that the order is affirmed, with costs.

                    The plaintiff Virginia Corsaro allegedly was injured when she slipped
                    and fell on a patch of ice in the shopping cart area at the store
                    owned by the defendant Stop and Shop, Inc., d/b/a Foodtown. In
                    support of its motion for summary judgment, the defendant made a
                    prima facie showing of its entitlement to judgment as a matter of
                    law. The defendant established that it lacked actual and constructive
                    notice of the icy condition, the injured plaintiff did not see any
                    icy condition until after she fell, the defendant had inspected the
                    area several times a day, and the origin of the icy condition was
                    undetermined (see, Pepito v. City of New York, 262 A.D.2d 619; DeMasi
                    v. Radbro Realty, 261 A.D.2d 354). There was no claim that the
                    defendant created the icy condition.  In opposition to the motion,
                    the plaintiffs failed to provide sufficient evidence to establish a
                    triable issue of fact. 1That the ice appeared brown and muddy,
                    standing alone, is insufficient to raise an issue of fact as to
                    constructive notice (see, Simmons v. Metropolitan Life Ins. Co., 84
                    N.Y.2d 972; Grillo v. New York City Tr. Auth., 214 A.D.2d 648).
                    Therefore, the defendant's motion for summary judgment was properly
                    granted.

                    BRACKEN, P.J., McGINITY, LUCIANO and FEUERSTEIN, JJ., concur. 
                  </p>
              </div>
          </CollapseContent>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        classNames="ani-caseSidebar"
        appear={ true }
        timeout={ 124 }
        in={ showCaseSidebar }
      >
        <div class="caseSidebar">
          <div class="caseSummaries">
            <CollapseControl title="Summaries"
              collapsed={ showCaseSummariesContent }
              toggleCollapse={ toggleShowCaseSummaries }/>

            <div class="caseSummaries__collapseContent">
              <CollapseContent show={ showCaseSummariesContent }>
                { [0].map(() => (
                  <div class="caseSummaries__content">
                    <div class="caseSummaries__title">
                      <h3> TEDESCO v. NORFOLK SOUTHERN CORP., (W.D.N.Y. 2002) 00-CV-0172E(Sc) (W.D.N.Y. Jun. 6, 2002) </h3>
                    </div>

                    <div class="caseSummaries__body">
                      <p>
                        See Corsaro v. Stop Shop, Inc., 732 N.Y.S.2d 95, 96 (2d Dep't
                        2001) ("That the ice appeared brown and muddy, standing alone, is
                        insufficient to raise an issue of fact as to constructive
                        notice") (citations omitted); Wimbush v. City of Albany, 727
                        N.Y.S.2d 745, 747 (3d Dep't 2001) ("Plaintiff's deposition
                        testimony that he slipped on a patch of bumpy, broken ice which
                        he failed to see at any point before he fell — including on his
                        way into the build…
                      </p>
                    </div>
                  </div>
                )) }
              </CollapseContent>
            </div>
          </div>

          <div class="caseCitedCases">
            <CollapseControl title="Cited Cases"
              collapsed={ showCaseCitedCasesContent }
              toggleCollapse={ toggleShowCaseCitedCases }/>

            <div class="caseCitedCases__collapseContent">
              <CollapseContent show={ showCaseCitedCasesContent }>
                { [0, 1, 3].map(() => (
                  <div class="caseSummaries__content">
                    <div class="caseSummaries__title">
                      <h3> TEDESCO v. NORFOLK SOUTHERN CORP., (W.D.N.Y. 2002) 00-CV-0172E(Sc) (W.D.N.Y. Jun. 6, 2002) </h3>
                    </div>

                    <div class="caseSummaries__body">
                      <p>
                        See Corsaro v. Stop Shop, Inc., 732 N.Y.S.2d 95, 96 (2d Dep't
                        2001) ("That the ice appeared brown and muddy, standing alone, is
                        insufficient to raise an issue of fact as to constructive
                        notice") (citations omitted); Wimbush v. City of Albany, 727
                        N.Y.S.2d 745, 747 (3d Dep't 2001) ("Plaintiff's deposition
                        testimony that he slipped on a patch of bumpy, broken ice which
                        he failed to see at any point before he fell — including on his
                        way into the build…
                      </p>
                    </div>
                  </div>
                )) }
              </CollapseContent>
            </div>
          </div>
        </div>
      </CSSTransition>
    </div>
  </div>
)

function CollapseControl ({
  title,
  toggleCollapse,
  collapsed,
  ...rest
}) {
  return (
    <div { ...rest } >
      <div class="collapseControl"
        onClick={ ev => toggleCollapse() }
      >
    <div class="collapseControl__label">
      <span class="f-h3"> { title } </span>
    </div>

    <Transition in={ collapsed } timeout={ 200 }>
    { transitionState => (
      <div
      class={ `collapseControl__toggle` }
    >
      <img
        class={ `collapseControl__toggleIcon collapseControl__toggleIcon-${transitionState}` }
        src="/assets/chevron-down-grey.png" />
      </div>
    )}
  </Transition>
    </div>
    </div>
  )
}


export default connector([
  'content',
  'currentSearchResults',
  'currentJurisdictionFilters',
  'showCaseOverviewContent',
  'showCaseCitedCasesContent',
  'showCaseSummariesContent',
  'caseIndexOf',
  'showCaseSidebar'
], Case)
