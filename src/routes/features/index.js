import { h, Component } from 'preact';
import connector from '../../connector'

const Features = ({
    content: { features },
  }) => (
    <section>
      <div class="contentWrap">
        <h1> { features.title } </h1>
    </div>
    </section>
)

export default connector('content', Features)

