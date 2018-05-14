import { h, Component } from 'preact';

import { Redirect } from 'react-router-dom'
import connector from '../../connector'

export default ({
  hasAuth,
  match,
  location: { state = {} },
  login
}) => (
  hasAuth ? <Redirect to={ state.from || "/" }/>
  : <div>
      <h1> Login </h1>
      <h3> Click below to be redirected to social login. </h3>

      { state.from && <p> from { state.from } </p> }

      <button onClick={ login }> Login Here </button>
    </div>
)
