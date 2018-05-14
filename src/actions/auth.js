// @flow
import authService from '../auth'

export default {
  auth ({ hasAuth }: { hasAuth: boolean }): { hasAuth: boolean } {
    return { hasAuth: !hasAuth }
  },

  // redirect user to hosted auth0 login page
  // auth0 redirects back with tokens and other info in url hash
  // (see below call to captureAuthToken)
  login ({ hasAuth }) {
    authService.login()
  },

  // called in after making call to `login`
  // relies on hash fragments in url after redirect back from auth0
  captureAuthToken (state) {
    return authService.parseHash()
      // TODO unwind this a bit, dig the possible insidious behavior
      // null == no token
      // err on bad token or other problems
      .then(hash => hash === null ?
        { hasAuth: false, accessToken: null, idToken: null }
        : { hasAuth: true, accessToken: hash.accessToken, idToken: hash.idToken }
      )
      .catch(err => { console.error('captureAuthToken', err) })
  },

  logout (state) {
    return { hasAuth: false, authToken: null }
  }
}
