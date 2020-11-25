import * as actionTypes from "./actionTypes"

export function addToCart(cartIem){
    return {type:actionTypes.ADD_TO_CART, payload:cartIem}
}

export function removeFromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}