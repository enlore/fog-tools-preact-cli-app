import { h, Component } from 'preact';
import connector from '../../connector'

const Profile = ({
  content: { profile }
}) => (
  <section class="contentWrap">
    <div>
      <h1> { profile.title } </h1>
    </div>
  </section>
)

export default connector('content', Profile)
