import { Route, Redirect } from 'react-router-dom'
import connector from '../connector'

// ProtectedRoute
export default connector('hasAuth', ({ hasAuth, component: Component, ...rest }) => (
  <Route { ...rest } render={ props => (console.info(props),
      // pass component through to the dom
      hasAuth ?  ( <Component { ...props } />)

      // or send the user to where they should be instead
      : (<Redirect
          to={{
            pathname: "/login",
            state: { from: props.location.pathname }
          }}
        />)
    )
    }
  />
))
