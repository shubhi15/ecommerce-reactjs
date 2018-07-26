import React, { Component } from "react";
import { connect } from "react-redux";
import { Route,Link } from "react-router-dom";
import Auth from "../../modules/Auth";

class AppHeader extends Component {
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
      <div>
        {this.state.authenticated ? (
          <ul className="product-navigation">
            <li>
              <Link to="/products">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Log out</Link>
            </li>
          </ul>
        ) : (
          <ul className="product-navigation">
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default AppHeader;
