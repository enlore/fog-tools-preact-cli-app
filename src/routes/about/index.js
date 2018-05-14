import { h, Component } from 'preact';
import connector from '../../connector'

const About = ({
  content: { about },
}) => (
  <section>
    <div class="contentWrap">
      <h1>{ about.title }</h1>
    </div>
  </section>
)

export default connector('content', About)

