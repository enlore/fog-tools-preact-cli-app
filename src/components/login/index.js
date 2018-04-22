import { h, Component } from 'preact';

import { Redirect } from 'react-router-dom'
import connector from '../../connector'

export default connector('hasAuth', ({ hasAuth, location: { state = {} }, auth }) => (
  hasAuth ?
    <Redirect to={ state.from || "/" }/>
    : <div>
        <h1> login </h1>
        <p> from { state.from } </p>
        <button onClick={ auth }> Login Here </button>
      </div>
))
