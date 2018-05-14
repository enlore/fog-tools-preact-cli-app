import { h, Component } from 'preact';
import style from './style';
import connector from '../../connector'

const Programs = ({
    content: { programs }
  }) => (
    <div>
      <h1> { programs.title } </h1>
    </div>
)

export default connector('content', Programs)
