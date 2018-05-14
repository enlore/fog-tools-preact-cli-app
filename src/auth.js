const DOMAIN       = 'fog-haus.auth0.com'
const CLIENT_ID    = ''
const REDIRECT_URI = 'http://localhost:8080/auth'

import auth0 from 'auth0-js'

const auth0Service = new auth0.WebAuth({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  redirectUri: REDIRECT_URI,
  audience: `https://${DOMAIN}/userinfo`,
  responseType: 'token id_token',
  scope: 'openid profile read:search'
})

console.info(auth0Service)

function login () {
  auth0Service.authorize()
  // returned from auth0
  // access_token
  // id_token
  // expires_in
}

function parseHash () {
  return new Promise((res, rej) => {
    auth0Service.parseHash((err, result) => {
      console.info('parseHash', err, result)
      if (err) rej(err)
      else res(result)
    })
  })
}

    // auth0Service.client.userInfo(result.accessToken, (err, profile) => {
      // console.info(err, profile)

      // if (err) return cb(err)

      // cb(profile.auth_token)
    // })
  // })

export default {
  login,
  parseHash
}

// post signup payload from auth0
// {
  // "sub": "auth0|5af5d81c5d7d1617fd7c3009",
    // "nickname": "nick",
    // "name": "nick@fog.haus",
    // "picture": "https://s.gravatar.com/avatar/606f3a4db8e72deb86118ed31af78b13?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fni.png",
    // "updated_at": "2018-05-11T17:51:24.932Z"
// }

// captureAuthToken {error: "invalid_token", errorDescription: "`state` does not match."}

// http://localhost:8080/#/
// access_token=6X4smW4Sk_Ao-pQMFWYPW-nYLHP3c6Er
// &expires_in=7200
// &token_type=Bearer
// &state=VRTlTxGCzZ-JRdURdwnL~jXmpagyS0RZ
// &id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9EWTJRelpDT0VNMk9ERkRRekkzTWpneU5EVTBPVEpETUVaRU16TkdSRFEwUmpORU1EWTRSQSJ9.eyJpc3MiOiJodHRwczovL2ZvZy1oYXVzLmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDEwMDkzMDIxMDYwNzQ2ODQ0NDE5NSIsImF1ZCI6IjV2M1cwVW1hTFZfd05ZT211amY4dTZZSE5yaU5LRFhxIiwiaWF0IjoxNTI1NzMwMjc4LCJleHAiOjE1MjU3NjYyNzgsImF0X2hhc2giOiJLeEhpOS1QeDhwQzIyR05HckRmYnpRIiwibm9uY2UiOiJ5eFNCZXc1SXU0VWVMQURHZnVjbVBVdy1nLTNGaEhoYiJ9.SIbMhNYXYjzda-1aiPIPF_POg2F45g-1ErxktClGi--ewN8XSN4dd0uV8KlR2j4vvm1aQH8zDexSnOl5PKkUZoQM3Uh3D5_vsNTPusMBdtOFgno3WDvyRVCbFek5L-wWOUwMKKkqTwfZSeMRofXc7_AdYrNNwZCz3C70Ef9lEUeDuKBB0Vom5B5iAoYmt8TZGI4imPQtDrVL3tqNhoIHvcYG3ov0g_6ZMGr-g7AYXVK1GD5bAzgEOEIufAxfQUcDS4HihKSFor519DVtPNvISyX5oXZS_AvpDiORHVKsTJTi-OhmtyaARUxVLfExyV8DKmoCrCx4NlmU205IFnfOBQ
//
//

// http://localhost:8080/auth#/error=access_denied
// &error_description=Service%20not%20found%3A%20https%3A%2F%2Ffog-haus.auth0.com
// &state=tO3pTtNrddAgMN8J5jgGjdy22aQlO3bP
//
// http://localhost:8080/#/error=access_denied
// &error_description=Service%20not%20found%3A%20https%3A%2F%2Ffog-haus.auth0.com
// &state=T9MoG3HENBQX9zuYlLsuyIQP49eMkbvT
