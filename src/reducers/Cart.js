import * as types from './../constants/ActionType';

const initialState = [
    {
        product : {
            id : 1,
            name : 'iphone 7 plus',
            image : 'https://bizweb.dktcdn.net/thumb/large/100/340/264/products/vi-vn-iphone-7-red-slider05.jpg',
            description : 'made in apple',
            price : 500,
            inventory : 10,
            rating : 5
        },
        quantity : 7
    }
];

const Cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default:
            return [...state];
    }
}

export default Cart;