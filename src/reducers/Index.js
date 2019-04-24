import { combineReducers } from 'redux';
import products from './Products';
import cart from './Cart';

const myReducer = combineReducers({
    products,
    cart
});

export default myReducer;