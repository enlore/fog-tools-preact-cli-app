import { h, Component } from 'preact';
import connector from '../../connector'

class SearchBar extends Component {
  render ({
    placeholder,
    currentSearchString,
    setSearchString,
    search,
    ...props
  }, state) {
    return (
      <div class="searchbar">
        <input type="search"
          { ...props }
          class="searchbar__input"
          value={ currentSearchString }
          placeholder={ placeholder }
          onInput={ e => setSearchString(e.target.value) }
          onChange={ search }
        />
      </div>
    )
  }
}

export default connector('currentSearchString', SearchBar)
