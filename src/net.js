// @flow
const _throw = msg => { throw new Error(msg) }

const withQuery = (url: string, query) => {
  let params = new URLSearchParams()
  Object.keys(query).forEach(k => params.append(k, query[k]))
  return `${url}?${params.toString()}`
}

type BodyPick = { body: any, rest: any }

const ENV = process.env.NODE_ENV

// token is access_token via Auth0
function authHeader (token: string): { Authorization: string } {
  return { Authorization: `Bearer ${token}` }
}

// skipping cookies for the moment
const credentials = ENV === 'development' ? 'include' : 'same-origin'

// TODO handle json serialization barf
// const _jsonProxy = (f: Function) =>
  // (url: string, { body, ...rest }: BodyPick = {}) =>
    // f(url, {...rest, body: body ? JSON.stringify(body) : void 0 })

function _authHeaderProxy (f: Function ): Function {
  return function (url: string, { accessToken, headers = {}, ...rest }) {
    return f(url, {
      headers: {
        ...headers,
        ...authHeader(accessToken)
      },
      ...rest
    })
  }
}

function _jsonProxy (f: Function): Function {
  return function (url: string, { body, ...rest }: { body: any } = {}) {
    return f(url, {
      // serialize the body prop if present
      body: body ? JSON.stringify(body): void 0,
      // pack everything else on there (headers, etc)
      ...rest,
    })
  }
}

const jsonHeaders = {
  'Content-Type': 'application/json'
}

const get = (url, { query, body, headers } = {}) => {
  let _headers = body ?
    Object.assign({}, headers, jsonHeaders) // jsonHeaders will over write
    : headers

  return fetch(query ? withQuery(url, query) : url, {
      credentials,
      headers: _headers,
      body,
      query,
      method: body ? 'POST' : 'GET'
    })
    .then(resp => resp.status >= 400 ? _throw(resp.statusText) : resp)
    .then(resp => resp.json())
    .catch(err => (console.error(err), _throw(err)))
}

const getProtected = _jsonProxy(_authHeaderProxy(get))

export default {
  get: _jsonProxy(get)
}


export {
  get,
  getProtected
}
