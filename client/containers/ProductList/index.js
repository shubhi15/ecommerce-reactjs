import React, { Component } from 'react';
import { connect } from 'react-redux';
import { productsFetchData, updatePageIndex } from '../../actions/ProductActions';
import ProductListItem from '../../components/ProductListItem';

class ProductList extends Component {


    render() {

        return <div className="product-list-container">
            {this.props.products.map(item => (
              <ProductListItem
                key={item._id}
                onItemClick={e => this.props.onListItemClick(e)}
                product={item}
              />
            ))}
          </div>;
    }
}

export default ProductList;
