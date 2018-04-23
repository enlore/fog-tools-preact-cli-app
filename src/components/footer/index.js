import { h, Component } from 'preact';
import { Link } from 'react-router-dom'
import connector from '../../connector'

const Footer = ({
  content: { nav, footer }
}) => (
  <div class="footer">
    <div class="footer__brand">
      <h1> { footer.headline } </h1>
    </div>

    <div class="footer__nav">
      <nav class="footer__navControl">
          <Link
            class="footer__anchor"
            to={ nav.about.href }>{ nav.about.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.features.href }>{ nav.features.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.features.href }>{ nav.features.text }</Link>
      </nav>
    </div>

    <div class="footer__copyright">
      { footer.copyright }
    </div>
  </div>
)

export default connector('content', Footer)
