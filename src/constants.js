const HAS_AUTH_IN_DEV = false

const DOMAIN       = 'fog-haus.auth0.com'
const CLIENT_ID    = ''
const REDIRECT_URI = 'http://localhost:8080/auth'

if (CLIENT_ID === '') console.warn('fog-app-boilerplate', 'Don\'t forget to set your Auth0 Client ID.')

export default {
  DOMAIN,
  CLIENT_ID,
  REDIRECT_URI,
  HAS_AUTH_IN_DEV
}

export {
  DOMAIN,
  CLIENT_ID,
  REDIRECT_URI,
  HAS_AUTH_IN_DEV
}
