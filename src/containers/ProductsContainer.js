import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import * as actions from './../actions/Index';

class ProductsContainer extends Component {

    
    render() {
        var { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
        
    }

    showProducts (products) {
        var { onAddToCart, onUpdateMessage } = this.props;
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product} onAddToCart = {onAddToCart} onUpdateMessage = { onUpdateMessage } />;
            });
        }

        return result;
    }

}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products : state.products
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1));
        },
        onUpdateMessage : (message) => {
            dispatch(actions.changeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsContainer);