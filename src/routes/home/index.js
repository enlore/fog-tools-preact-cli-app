// @flow
import { h, Component } from 'preact';
import connector from '../../connector'

import { CSSTransition } from 'react-transition-group'
import { Redirect, Link } from 'react-router-dom'

const Home = ({
    content: { index },
    showResults,
    setSearchString,
  }) => (
  <div class="homeScreen">
    <header class="homeScreen__header">
      <div class="contentWrap">
        <h1 class="f-center"> The Brand</h1>
      </div>
    </header>

    <section>
      <div class="contentWrap">
        <div class="homeTagline">

          <h2 class="f-center">{ index.headline }</h2>
          <p class="f-lg f-center">{ index.tagline }</p>

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
