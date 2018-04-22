import { h, Component } from 'preact';
import style from './style';
import connector from '../../connector'

const Pricing = ({
    content: { pricing }
  }) => (
    <div>
      <h1> { pricing.title } </h1>
    </div>
)

export default connector('content', Pricing)
