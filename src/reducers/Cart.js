import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('Cart'));
var initialState = data ? data : [];

var findIndex = (cart, product) => {
    var result = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                result = i;
                break;
            }
        }
    }
    return result;
}

const Cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        case types.DELETE_PRODUCT_ON_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        case types.UPDATE_QUANTITY_PRODUCT_ON_CART:
            index = findIndex(state, product);
            console.log(quantity);
            if (index !== -1) {
                state[index].quantity = quantity;
                console.log(state[index].product);
            }
            localStorage.setItem('Cart', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

export default Cart;