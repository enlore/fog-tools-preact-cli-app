import { h, Component } from 'preact';
import connector from '../../connector'

const Programs = ({
  content: { programs }
}) => (
  <section class="contentWrap">
    <div>
      <h1> { programs.title } </h1>
    </div>
  </section>
)

export default connector('content', Programs)
