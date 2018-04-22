// @flow
const _throw = msg => { throw new Error(msg) }

const withQuery = (url: string, query) => {
  let params = new URLSearchParams()
  Object.keys(query).forEach(k => params.append(k, query[k]))
  return `${url}?${params.toString()}`
}

type BodyPick = { body: any, rest: any }

const ENV = process.env.NODE_ENV

// skipping cookies for the moment
const credentials = ENV === 'development' ? 'include' : 'same-origin'

// TODO handle json serialization barf
// const _jsonProxy = (f: Function) =>
  // (url: string, { body, ...rest }: BodyPick = {}) =>
    // f(url, {...rest, body: body ? JSON.stringify(body) : void 0 })

function _jsonProxy (f: Function): Function {
  return function (url: string, { body, ...boop }: { body: any } = {}) {
    return f(url, {...boop, body: body ? JSON.stringify(body): void 0 })
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

export default { get: _jsonProxy(get) }
