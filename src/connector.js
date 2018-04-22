import actions from './actions'
import { connect } from 'unistore/preact'

export default (stateKeys, Component) => connect(stateKeys, actions)(Component)
