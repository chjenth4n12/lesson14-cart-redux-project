import * as types from './../constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product : product,
        quantity : quantity
    };
};

export const deleteProductOnCart = (product) => {
    return {
        type : types.DELETE_PRODUCT_ON_CART,
        product
    }
};

export const changeMessage = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
};