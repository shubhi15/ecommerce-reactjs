import { combineReducers } from 'redux';
import { products, productsHasErrored, productsIsLoading, page, selectedProduct } from './ProductsReducer';

export default combineReducers({
    products,
    page,
    productsHasErrored,
    productsIsLoading,
    selectedProduct
});
