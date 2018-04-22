import { h, Component } from 'preact';
import style from './style';
import connector from '../../connector'

const About = ({
    content: { about },
  }) => (
  <div>
    <h1>{ about.title }</h1>
  </div>
)

export default connector('content', About)

