import { combineReducers } from 'redux';
import products from './Products';
import cart from './Cart';
import message from './Message';

const myReducer = combineReducers({
    products,
    cart,
    message
});

export default myReducer;