import { h, Component } from 'preact';
import connector from '../../connector'

import { Redirect, withRouter } from 'react-router-dom'

class SearchBar extends Component {
  render ({
    placeholder,
    currentSearchString,
    showResults,
    setSearchString,
    search,
    ...props
  }, state) {
    return (
      <div class="searchbar">
        <Bar
          currentSearchString={ currentSearchString }
          placeholder={ placeholder }
          setSearchString={ setSearchString }
          search={ search }
          { ...props }
        />
      </div>
    )
  }
}

const Bar = withRouter(({ history, currentSearchString, setSearchString, placeholder, search, ...props }) => (
  <input type="search"
    { ...props }
    class="searchbar__input"
    value={ currentSearchString }
    placeholder={ placeholder }
    onInput={ ev => setSearchString(ev.target.value) }
    onKeypress={ ev => {
        if (ev.key === 'Enter') {
          console.info('hello it is enter key')
          search()
          history.push("/cases")
        }
      }
    }
  />
))

export default connector('currentSearchString, showResults', SearchBar)
