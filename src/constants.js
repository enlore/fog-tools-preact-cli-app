const HAS_AUTH_IN_DEV              = process.env.HAS_AUTH_IN_DEV === 'true' ? true : false

const DOMAIN                       = process.env.AUTH0_DOMAIN
const CLIENT_ID                    = process.env.AUTH0_CLIENT_ID
const REDIRECT_URI                 = process.env.AUTH0_REDIRECT_URI
const AUDIENCE                     = process.env.AUTH0_AUDIENCE
const RESPONSE_TYPE                = process.env.AUTH0_RESPONSE_TYPE
const SCOPE                        = process.env.AUTH0_SCOPE

const FIREBASE_API_KEY             = process.env.FIREBASE_API_KEY
const FIREBASE_DATABASE_URL        = process.env.FIREBASE_DATABASE_URL
const FIREBASE_STORAGE_BUCKET      = process.env.FIREBASE_STORAGE_BUCKET
const FIREBASE_AUTH_DOMAIN         = process.env.FIREBASE_AUTH_DOMAIN
const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID
const FIREBASE_PROJECT_ID          = process.env.FIREBASE_PROJECT_ID

// TODO env vars ingested as?
if (CLIENT_ID === '') console.warn('fog-app-boilerplate', 'Don\'t forget to set your Auth0 Client ID.')

export default {
  DOMAIN,
  CLIENT_ID,
  REDIRECT_URI,
  HAS_AUTH_IN_DEV,
  AUDIENCE,
  RESPONSE_TYPE,
  SCOPE
}

export {
  DOMAIN,
  CLIENT_ID,
  REDIRECT_URI,
  AUDIENCE,
  RESPONSE_TYPE,
  SCOPE,

  HAS_AUTH_IN_DEV,

  FIREBASE_API_KEY,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID
}
