export function productsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function productsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function productsFetchDataSuccess(products) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        products: products
    };
}

export function updatePageIndex(pageIndexValue) {
    return (dispatch) => {

       dispatch(updatePageIndexSucess(pageIndexValue));
       dispatch(productsFetchData(pageIndexValue));
    }
}

export function updatePageIndexSucess(pageIndex) {
    return {
        type: 'PAGE_UPDATED',
        page: pageIndex
    };

}

export function productsFetchData(pageIndex) {
    if(pageIndex != null) {
        return (dispatch, getState) => {
            dispatch(productsIsLoading(true));

            fetch('https://assignment-appstreet.herokuapp.com/api/v1/products?page='+pageIndex)
                .then((response) => {
                    debugger;
                    dispatch(productsIsLoading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((response) =>{
                    if(!response.products || response.products.length === 0 ){
                        dispatch(updatePageIndex(null));
                    }
                    dispatch(productsFetchDataSuccess(response.products));
                }).catch(() => dispatch(productsHasErrored(true)));
        };
    }

}

export function fetchProductDetailData(productId) {


        return (dispatch, getState) => {
            if(productId != null) {
                dispatch(productsIsLoading(true));
                fetch('https://assignment-appstreet.herokuapp.com/api/v1/products/'+productId)
                    .then((response) => {
                        dispatch(productsIsLoading(false));
                        return response;
                    })
                    .then((response) => response.json())
                    .then((response) =>{
                        if(response) {
                            dispatch(fetchProductDetailDataSuccess(response));
                        }

                    }).catch(() => dispatch(productsHasErrored(true)));
            } else {
                dispatch(productsHasErrored(true));
            }

        };
}
export function fetchProductDetailDataSuccess (selectedProduct) {
    return {
        type: 'PRODUCT_DETAIL_SUCCESS',
        selectedProduct: selectedProduct
    };
}
