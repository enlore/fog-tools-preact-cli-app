// See: https://github.com/mzgoddard/preact-render-spy
import { shallow, deep } from 'preact-render-spy';

import createStore from 'unistore'
import bindActions from '../actions'


describe('testing the store', () => {
  const _bindActions = (store) => ({
    inc ({ testVal }) {
      return { testVal: ++testVal }
    }
  })

  const doAction = (store, name, ...args) => store.action(_bindActions(store)[name])(...args)

  it('provides read access to state', () => {
    const store = createStore({ testVal: 0 })
    expect(store.getState()).toMatchObject({ testVal: 0 })
  })

  it('allows invocation of action, see reflected state update', () => {
    const store = createStore({ testVal: 0 })
    doAction(store, 'inc')

    let state = store.getState()
    expect(state).toMatchObject({ testVal: 1 })
  })
})
