import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as Message from './../constants/Message';
import CartResult from './../components/CartResult';
import * as actions from './../actions/Index';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.totalPrice(cart) }
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var { onDelete } = this.props;
        var result = Message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((cart, index) => {
                return <CartItem key={index} cart={cart} onDelete={ onDelete } />;
            });
        }
        return result;
    }

    totalPrice = (cart) => {
        var result = null;
        if (cart.length > 0) {
            var total = 0;
            for (var i = 0; i < cart.length; i++) {
                total = total + (cart[i].product.price * cart[i].quantity);
            }
            result = <CartResult total={ total } />
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id : PropTypes.number.isRequired,
                name : PropTypes.string.isRequired,
                image : PropTypes.string.isRequired,
                description : PropTypes.string.isRequired,
                price : PropTypes.number.isRequired,
                inventory : PropTypes.number.isRequired,
                rating : PropTypes.number.isRequired
            }).isRequired,
            quantity : PropTypes.number.isRequired
        })
    ).isRequired,
    onDelete : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelete : (product) => {
            dispatch(actions.deleteProductOnCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CartContainer);