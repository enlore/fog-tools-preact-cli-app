const HAS_AUTH_IN_DEV = false

const DOMAIN       = 'fog-haus.auth0.com'
const CLIENT_ID    = ''
const REDIRECT_URI = 'http://localhost:8080/auth'

const FIREBASE_API_KEY             = process.env.FIREBASE_API_KEY
const FIREBASE_DATABASE_URL        = process.env.FIREBASE_DATABASE_URL
const FIREBASE_STORAGE_BUCKET      = process.env.FIREBASE_STORAGE_BUCKET
const FIREBASE_AUTH_DOMAIN         = process.env.FIREBASE_AUTH_DOMAIN
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID
const FIREBASE_PROJECT_ID          = process.env.FIREBASE_PROJECT_ID

console.info(FIREBASE_API_KEY)

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
  HAS_AUTH_IN_DEV,
  FIREBASE_API_KEY,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID
}
