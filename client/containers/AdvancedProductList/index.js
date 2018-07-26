import React, { Component } from "react";
import { connect } from "react-redux";
import {
  productsFetchData,
  updatePageIndex
} from "../../actions/ProductActions";
import ProductList from "../ProductList";
import { withPaginated } from "../withPaginated";
import { withLoading } from "../withLoading";
import { withInfiniteScroll } from "../withScroll";
import { compose } from "recompose";
import Auth from "../../modules/Auth";
class AdvancedProductList extends Component {
  componentDidMount() {
    this.props.updatePage(1);
    this.props.toggleAuthenticateStatus();
  }
  onListItemClick(itemId) {
    this.props.onListItemClick(itemId);
  }
  push(url) {
    this.props.history.push(url);
  }
  render() {
    return (
      <div>
        {!Auth.isUserAuthenticated() ? (
          <div style={{ fontSize: "16px", color: "green" }}>
          You are not Logged In.
          </div>
        ) : (
          <AdvancedList
            products={this.props.products}
            isError={this.props.productsHasErrored}
            isLoading={this.props.productsIsLoading}
            page={this.props.page}
            onListItemClick={e => this.push("/details/" + e)}
            onPaginatedSearch={() => this.props.updatePage(this.props.page + 1)}
          />
        )}
      </div>
    );
  }
}

export const paginatedCondition = props => {
  return (props.page !== null && !props.isLoading) || props.isError;
};

export const infiniteScrollCondition = props =>
  window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
  props.products.length &&
  props.page != null &&
  !props.isLoading &&
  !props.isError;

export const loadingCondition = props => props.isLoading;

const AdvancedList = compose(
  withPaginated(paginatedCondition),
  withInfiniteScroll(infiniteScrollCondition),
  withLoading(loadingCondition)
)(ProductList);

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(productsFetchData()),
    updatePage: pageIndex => dispatch(updatePageIndex(pageIndex))
  };
};
const mapStateToProps = state => {
  return {
    products: state.products,
    isError: state.productsHasErrored,
    isLoading: state.productsIsLoading,
    page: state.page
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedProductList);
