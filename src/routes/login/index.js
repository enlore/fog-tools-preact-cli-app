// @flow
import { h, Component } from 'preact';
import connector from '../../connector'

import Login from '../../components/login'

const LoginScreen = ({
  hasAuth,
  login,
  match,
  location
}) => (
  <div class="loginScreen">
    <div class="contentWrap contentWrap--narrow">
      <Login hasAuth={ hasAuth } location={ location } login={ login } />
    </div>
  </div>
)

export default connector([ 'hasAuth' ], LoginScreen)
