// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
//

/**
 * A few notes on this project starter.
 *
 * Based on the `default` template/boilerplate app generated via:
 * https://github.com/developit/preact-cli
 *
 * Preact - IE >= IE9
 * https://github.com/developit/preact/issues/585#issuecomment-286458787
 *
 * preact cli:
 *   promise-polyfill
 *   isomorphic-unfetch
 *
 * fog:
 *   normalize.css
 *
 *
 *
 */

// import 'whatwg-fetch'

import createStore from 'unistore'
import devtools    from 'unistore/devtools'
import { Provider, connect } from 'unistore/preact'

import { h, Component } from 'preact'

import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/navbar'
import Footer from './components/footer'

import Home                     from './routes/home'
import About                    from './routes/about'
import Features                 from './routes/features'
import Pricing                  from './routes/pricing'
import Profile                  from './routes/profile'
import AuthLanding              from './routes/auth-landing'
import Login                    from './routes/login'

import bindActions from './actions'

if (module.hot) {
  require('preact/debug');
}

import initialState from './state'

// https://github.com/zalmoxisus/redux-devtools-extension
let store = process.env.NODE_ENV === 'production' ?
  createStore(initialState)
  : devtools(createStore(initialState));

import ProtectedRoute from './components/protected-route'

// on load, say hello to api, get session info, load user profile, etc

const doAction = (store, name, args) => store.action(bindActions(store)[name])(args)
// doAction(store, 'init')
console.info(bindActions(store))

class InnerApp extends Component {
  render ({ store }) {
    return (
      <Provider store={store}>
        <Router hashtype="hashbang">
          <div class="app">
            <div class="stickyFooter__contentWrap">
              <NavBar />

              <Switch>
                <Route exact    path ="/"                     component={Home} />
                <Route          path ="/about"                component={About} />
                <Route          path ="/features"             component={Features} />
                <Route          path ="/pricing"              component={Pricing} />
                <Route          path ="/login"                component={Login} />
                <Route          path ="/profile"              component={Profile} />
                <Route          path ="/auth"                 component={AuthLanding} />
              </Switch>

              <div class="stickyFooter__bumper"></div>
            </div>

            <Footer class="stickyFooter__footer"/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default class App extends Component {
  // this.setState ({ aStateKey: "a new value" })
  componentWillMount () {}
  componentDidMount () {}
  componentWillUnmount () {}
  componentWillReceiveProps () {}
  shouldComponentUpdate () { return true }
  // shouldComponentCallRenderAgain
  // do not re render via diff if false
  // discussion: use a preact component as a shell around a third party managed dom tree
  componentWillUpdate () {}
  componentDidUpdate () {}

  render() {
    console.info('hello its a me, App Component in render', this.props, this.state, this.base)
    return (
      <InnerApp
        store={ store }
      />
    );
  }
}

// https://preactjs.com/about/libraries-addons
// https://github.com/developit/preact-token-input
// https://github.com/developit/tags-input
// https://github.com/developit/preact-richtextarea
// https://github.com/developit/preact-virtual-list
//
// scrollbars
// https://github.com/lucafalasco/preact-custom-scrollbars
//
// select
// http://jedwatson.github.io/react-select/

// component life cycle
// componentWillMount         before  the     component   gets   mounted   to    the     DOM
// componentDidMount          after   the     component   gets   mounted   to    the     DOM
// componentWillUnmount       prior   to      removal     from   the       DOM
//
// componentWillReceiveProps(nextProps, nextState)  before  new     props       get    accepted
//    note: this.state and this.props in componentWillReceiveProps are referenes to prev props and state
//
// shouldComponentUpdate(nextProps, nextState)      before  render  (). Return  false  to        skip  render
//
// componentWillUpdate        before  render  ()
// componentDidUpdate         after   render  ()
//
// class based comps and functional comps
//
// const Link = ({ href, children}) =>
//    <a {...{ href, children }} />
//
//  render can return null
//
//  root render is (component, containerNode[, replaceNode: node]) => renderedDomNode
//      replaceNode is a child of containerNode
//      it will be the subject of the diffing and updating
//
//      if replaceNode undefined, preact will append component to containerNode
