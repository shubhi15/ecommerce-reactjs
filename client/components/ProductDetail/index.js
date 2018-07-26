import React, { Component } from 'react';
import ProductCarousal from '../ProductCarousal';
import ProductDescription from '../ProductDescription';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.selectedProduct.primary_product) {
            console.log(this.props.selectedProduct)
            return (
                    <ProductDescription  productInfo = {this.props.selectedProduct}></ProductDescription>
            );
        } else {
            return null;
        }
    }
}

export default ProductDetail;
