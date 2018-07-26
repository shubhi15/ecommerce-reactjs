import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AdvancedProductList from "../AdvancedProductList";
import ProductDetailContainer from "../ProductDetailContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import LoginPage from "../Login";
import LogoutFunction from "../Logout";
import SignUpPage from "../SignUp";
import Auth from "../../modules/Auth";
import Header from "../../components/Header";

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} {...rest} />
      )
    }
  />
);

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>
            <Header />

            <PropsRoute
              exact
              path="/"
              component={AdvancedProductList}
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <PrivateRoute
              exact
              path="/products"
              component={AdvancedProductList}
            />
            <PrivateRoute
              path="/details/:id"
              component={ProductDetailContainer}
            />
            <LoggedOutRoute
              path="/login"
              component={LoginPage}
              toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()}
            />
            <LoggedOutRoute path="/signup" component={SignUpPage} />
            <Route path="/logout" component={LogoutFunction} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Application;
