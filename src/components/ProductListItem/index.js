import React, { Component } from 'react';

class ProductListItem extends Component {
    render() {
        return (
            <div className="product-card" onClick = {(e) =>this.props.onItemClick(this.props.product._id)}>
                <div className="product-card-image">
                    <img src = {this.props.product.images[0]} className = "product-image-style" />
                </div>
                <div className="product-card-info">
                    <div className="product-card-info__name">{this.props.product.name}</div>
                    <div className="product-card-info__price">Rs. {this.props.product.mark_price}</div>
                </div>
            </div>
        );
    }
}

export default ProductListItem;
