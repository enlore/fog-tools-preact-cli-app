import { h, Component } from 'preact';
import { Link } from 'react-router-dom'
import style from './style';

import SearchBar from '../searchbar'

import actions from '../../actions'
import connector from '../../connector'

const mobile = true

class NavBar extends Component {
  render({ content: { nav }, hasAuth, auth }) {
    return (
      <nav class="navbar">
        <div class="navbar__contentWrap">

          <div class="navbar__logoContainer">
            <span class="navbar__logo"> Brand </span>
          </div>

          <div class="navbar__searchContainer">
            <SearchBar class="navbar__search" placeholder="hello"/>
          </div>

          <div style="display: none;">
            <Link
              class="navbar__anchor"
              to={ nav.about.href }>{ nav.about.text }</Link>

            <Link
              class="navbar__anchor"
              to={ nav.features.href }>{ nav.features.text }</Link>

            { hasAuth ?
                <a
                  class="navbar__anchor"
                  style={ { cursor: 'pointer' } }
                  onClick={ auth } to={ nav.logout.href }>{ nav.logout.text }</a>
                : <Link
                  class="navbar__anchor"
                  activeClassName={style.active}
                  to={ nav.signup.href }>{ nav.signup.text }</Link>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default connector('content, hasAuth', NavBar)
