import { h, Component } from 'preact';
import { Transition } from 'react-transition-group'

class CollapseContent extends Component {
  contentRef = null
  state = {
    height: 0
  }

  onRef = (ref) => {
    this.contentRef = ref
  }

  componentDidMount () {
    this.setState({ height: this.contentRef.getBoundingClientRect().height })
    console.info('state', this.contentRef.getBoundingClientRect(), this.state)
  }

  render ({ show, children }) {
    return (
      <Transition
        timeout={ 100 }
        in={ show }>

        { transitionState => (
            <div ref={ this.onRef }
              class={ `collapseConent collapseContent--${ transitionState }` }
              style={{
                overflow: 'hidden',
                transition: 'all 100ms ease-out',
                height: transitionState === 'entered' ? 'auto' : 0
              }}>

              { children }

            </div>
          )
        }
      </Transition>
    )
  }
}

export default CollapseContent
