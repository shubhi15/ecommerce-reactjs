
export function productsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function page(state = 0, action) {
    switch (action.type) {
        case 'PAGE_UPDATED':
            return action.page;

        default:
            return state;
    }
}

export function productsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function products(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
        let products =  [
            ...state,
            ...action.products
        ];
        return products;
        default:
            return state;
    }
}
export function selectedProduct(state = {}, action) {

    switch (action.type) {
        case 'PRODUCT_DETAIL_SUCCESS':
        return action.selectedProduct;
        default:
            return state;
    }
}
