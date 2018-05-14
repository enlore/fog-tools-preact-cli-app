import { h, Component } from 'preact';
import { Link } from 'react-router-dom'
import connector from '../../connector'

const Footer = ({
  content: { nav, copyright }
}) => (
  <div class="footer">
    <div class="footer__brand">
      <Link to="/">
        <h1> The Brand </h1>
      </Link>
    </div>

    <div class="footer__nav">
      <nav>
          <Link
            class="footer__anchor"
            to={ nav.about.href }>{ nav.about.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.features.href }>{ nav.features.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.pricing.href }>{ nav.pricing.text }</Link>
      </nav>
    </div>

    <div class="footer__copyright">
      © 2018 The Brand, Inc. All rights reserved.  Terms, conditions, features,
      availability, pricing, fees, service and support options subject to change
      without notice.
    </div>
  </div>
)

export default connector('content', Footer)
