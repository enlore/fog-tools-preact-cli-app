import { h, Component } from 'preact';
import { Link } from 'react-router-dom'
import connector from '../../connector'

const Footer = ({
  content: { nav, copyright }
}) => (
  <div class="footer">
    <div class="footer__brand">
      <h1> BookLawyer </h1>
    </div>

    <div class="footer__nav">
      <nav>
          <Link
            class="footer__anchor"
            to={ nav.about.href }>{ nav.about.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.programs.href }>{ nav.programs.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.features.href }>{ nav.features.text }</Link>

          <Link
            class="footer__anchor"
            to={ nav.features.href }>{ nav.features.text }</Link>
      </nav>
    </div>

    <div class="footer__copyright">
      © 2018 BookLawyer, Inc. All rights reserved.  Terms, conditions, features,
      availability, pricing, fees, service and support options subject to change
      without notice.
    </div>
  </div>
)

export default connector('content', Footer)
