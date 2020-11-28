import * as actionTypes from './actionTypes';
export function getProductsSuccess(products){
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS, // CHANGE_CATEGORY
        payload: products
    }
}

export function createProductSuccess(product){
    return{
        type:actionTypes.CREATE_PRODUCT_SUCCESS,payload:product
    }
}

export function updateProductSuccess(product){
    return{
        type:actionTypes.UPDATE_PRODUCT_SUCCESS,payload:product
    }
}


export function saveProductApi(product) {
    let url = "http://localhost:3000/products/";

    return fetch(url + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(product)
    })
    .then(response => handleResponse(response))
    .catch(err => handleError(err));

};

export function saveProduct(product) {
    return function(dispatch) {
        return saveProductApi(product)
        .then(savedProduct => { // savedProduct burada response.json() olarak geliyor.
            product.id
                ? dispatch(updateProductSuccess(savedProduct))
                : dispatch(createProductSuccess(savedProduct))
        })
        .catch(err => {
            throw err
        });
    };
}

export async function handleResponse(response) {
    if(response.status) {
        return await response.json();
    } else {
        const error = await response.text();
        throw new Error(error);
    }
}

export function handleError(error) {
    console.error("Fetch hatası oluştu");
    throw error;
}

export function getProducts(categoryId){
    return function(dispatch){
        let url = "http://localhost:3000/products"
        if(categoryId)
        {
            url = url + "?categoryId=" + categoryId;
        }
        return fetch(url).then(response => response.json())
        .then(result  => dispatch(getProductsSuccess(result)));
    }
}