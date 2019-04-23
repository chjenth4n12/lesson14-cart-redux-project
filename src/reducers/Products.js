import * as actionType from './../constants/ActionType';

var initialState = [
    {
        id : 1,
        name : 'iphone 7 plus',
        image : '',
        description : 'made in apple',
        price : 500,
        inventory : 10
    },
    {
        id : 2,
        name : 'iphone 8 plus',
        image : '',
        description : 'made in apple',
        price : 700,
        inventory : 10
    },
    {
        id : 3,
        name : 'iphone 6 plus',
        image : '',
        description : 'made in apple',
        price : 300,
        inventory : 10
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PRODUCT:
            return [...state];
    
        default:
            return [...state];
    }
}