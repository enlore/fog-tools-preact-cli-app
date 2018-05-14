import { h, Component } from 'preact';
import { Link } from 'react-router-dom'

import SearchBar from '../searchbar'
import { CSSTransition } from 'react-transition-group'

import actions from '../../actions'
import connector from '../../connector'

const mobile = true

class NavBar extends Component {
  render({
    content: { nav },
    showSearch,
    showMobileNav,
    hideMobileNav,
    hasAuth,
    auth,
    toggleShowMobileNav
  }) {
    return (
      <nav class="navbar">
        <div class="navbar__contentWrap u-floatContainer">
          <div class="navbar__logoContainer u-floatLeft" onClick={ ev => { toggleShowMobileNav() } }>
            <div class="navbar__logo navbar__logo--sm"> Brnd </div>
            <div class="navbar__logo navbar__logo--lg"> The Brand </div>
          </div>

          <div class="navbar__searchContainer u-floatLeft">
            <SearchBar class="navbar__search" placeholder="Search cases, statutes, and more"/>
          </div>

          <div class="navbar__links u-floatRight">
            <Link class="navbar__topnavAnchor" to={ nav.features.href }> { nav.features.text } </Link>
            <Link class="navbar__topnavAnchor" to={ nav.about.href }> { nav.about.text } </Link>
            <Link class="navbar__topnavAnchor" to={ nav.pricing.href }> { nav.pricing.text } </Link>

            { hasAuth ? <Link class="navbar__topnavAnchor" to={ nav.logout.href }> { nav.logout.text } </Link>
                : <Link class="navbar__topnavAnchor" to={ nav.signup.href }> { nav.signup.text } </Link>
            }
          </div>
        </div>

        <CSSTransition
          in={ showMobileNav }
          timeout={ 40 }
          classNames="ani-navbar-mobile"
        >
          <div class="navbar__menuMask" onClick={ hideMobileNav }>
            <div class="navbar__menu">
              <div class="navbar__mobileToggleControl" onClick={ toggleShowMobileNav }>
                The Brand
              </div>

              <Link
                class="navbar__anchor"
                onClick={ hideMobileNav }
                to={ nav.home.href }>{ nav.home.text }</Link>

              <Link
                class="navbar__anchor"
                to={ nav.about.href }>{ nav.about.text }</Link>

              <Link
                class="navbar__anchor"
                to={ nav.features.href }>{ nav.features.text }</Link>

              <Link
                class="navbar__anchor"
                to={ nav.pricing.href }>{ nav.pricing.text }</Link>

              { hasAuth ?
                  <a
                    class="navbar__anchor"
                    style={ { cursor: 'pointer' } }
                    onClick={ auth } to={ nav.logout.href }>{ nav.logout.text }</a>
                  :
                  <Link
                    class="navbar__anchor"
                    to={ nav.signup.href }>{ nav.signup.text }</Link>
              }
            </div>
          </div>
        </CSSTransition>
      </nav>
    );
  }
}

export default connector('content, hasAuth, showMobileNav', NavBar)
