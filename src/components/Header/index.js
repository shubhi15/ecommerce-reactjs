import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'

class AppHeader extends Component {
    render() {
        return (
            <ul className ="product-navigation">
                <li><a href = "/">Home</a></li>
                <li><a>About</a></li>
                <li><a>Products</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

        );
    }
}

export default AppHeader;
