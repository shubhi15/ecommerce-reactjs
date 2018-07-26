import React, { Component } from 'react';
import ProductDetail from '../../components/ProductDetail';
import { fetchProductDetailData } from '../../actions/ProductActions';
import { connect } from 'react-redux';
class ProductDetailContainer extends Component {

    componentDidMount() {
        this.props.fetchProductDetail(this.props.match.params.id);
    }
    render() {
        return (
            <ProductDetail selectedProduct = {this.props.selectedProduct}></ProductDetail>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductDetail: (productId) => dispatch(fetchProductDetailData(productId))
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        selectedProduct: state.selectedProduct,
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailContainer);
