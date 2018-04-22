import { h, Component } from 'preact';

import SearchBar from '../searchbar'

import actions from '../../actions'
import connector from '../../connector'

const SearchGroup = ({
  search
}) => (
  <div class="searchGroup">
    <SearchBar />
    <button
      class="searchbar__button"
      onClick={ search }> Search </button>
  </div>
)

export default connector('content, hasAuth', SearchGroup)
