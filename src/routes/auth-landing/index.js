import { h, Component } from 'preact';
import connector from '../../connector'
import { Redirect } from 'react-router-dom'

const AuthLanding = ({
  hasAuth,
  captureAuthToken,
  login
}) => (
  <div>
    <div class="authLoadingScreen">
      <div class="contentWrap">
        <img class="u-responsive u-margin-auto" src="/assets/loading.svg" />
        <h2 class="f-center"> Logging you in. </h2>
      </div>
    </div>

    { hasAuth && <Redirect to="/" /> }
    { !hasAuth && captureAuthToken() }
  </div>
)
export default  connector([ 'hasAuth' ], AuthLanding)
