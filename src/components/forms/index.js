import { Component } from 'preact'
import linkState from 'linkstate';
import style from './style'

const prevDef = f => (e) => {
  e.preventDefault()
  return f(e)
}

class FormLinked extends Component {
  render({ }, { answer }) {
    return (
      <div>
        <input type="radio" name="demo"
          value="yes" checked={answer == 'yes'}
          onChange={linkState(this, 'answer', 'target.value')}
        />
        <input type="radio" name="demo"
          value="no" checked={answer == 'no'}
          onChange={linkState(this, 'answer', 'target.value')}
        />
      </div>
    );
  }
}

class FormA extends Component {
  componentWillMount () {
    this.setState({ textInput: this.props.textInput })
  }

  render (props, state) {
    return <form
      onSubmit={ prevDef(e => {
        let payload = {
          textInput: this.state.textInput
        }

        this.setState({
          textInput: ''
        })

        console.info('payload', payload)

      }) }>

      <input type="text" value={ state.textInput }
        onInput={ e => {
          this.setState({ textInput: e.target.value })
        }
      } />
    </form>
  }
}

const Form1 = (props) => (
  <form onSubmit={ prevDef(e => {
      let obj = {
        textInput: props.textInput
      }

      console.info('fetch props up to api', obj)
    }) }>

    <label> a label </label>

    <input type="text" value={ props.textInput }
      onInput={ e => {
        console.info(props.textInput)
      }
    } />
  </form>
)

export default function Forms (props) {
  return <div class={style.formScreenRed + " " + style.formScreen}>
    <Form1 textInput="hello" />
    <FormA textInput="nothing" />
    <FormLinked />
  </div>
}
