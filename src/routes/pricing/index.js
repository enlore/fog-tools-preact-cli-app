import { h, Component } from 'preact';
import connector from '../../connector'

const Pricing = ({
  content: { pricing }
}) => (
  <section>
    <div class="contentWrap">
      <h1> { pricing.title } </h1>
    </div>
  </section>
)

export default connector('content', Pricing)
