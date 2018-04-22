// @flow
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import { h, Component } from 'preact';
import connector from '../../connector'

import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

// import SearchGroup from '../../components/searchgroup'
import SearchBar from '../../components/searchbar'

const Home = ({
    content: { index },
  }) => (
  <div class="homeScreen">
    <NavBar />
      <section>
        <div class="contentWrap">
          <h1> { index.headline } </h1>
          <h2> { index.tagline } </h2>
        </div>
      </section>
    <Footer />
  </div>
)

export default connector('content', Home)
