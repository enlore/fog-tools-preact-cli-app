import { h, Component } from 'preact';
import style from './style';
import connector from '../../connector'


const Features = ({
    content: { features },
  }) => (
    <div>
      <h1> { features.title } </h1>
    </div>
)

export default connector('content', Features)

