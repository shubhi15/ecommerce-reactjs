import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import { productsFetchData, updatePageIndex } from '../../actions/ProductActions';
import Header from "../../components/Header";


import AdvancedProductList from '../AdvancedProductList';
import ProductDetailContainer from '../ProductDetailContainer';

import PropTypes from 'prop-types';

class Application extends Component{

  
    render() {
        return (
            <div>
                <Header/>
                <Route exact path="/" component={AdvancedProductList} />
                <Route  path="/details/:id" component={ProductDetailContainer}  />
            </div>
        );
    }
}



export default Application;

