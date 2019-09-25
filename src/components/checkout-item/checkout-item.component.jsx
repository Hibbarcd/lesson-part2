import React from 'react'
import { connect } from 'react-redux'
import {
    clearItemFromCart,
    addItem,
    removeItem
  } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, quantity, price } = cartItem

        return (
            <div className='checkout-item'>
                <div className='image-container'>
                    <img src={imageUrl} alt='item' />
                </div>
                <span className='name'>{ name }</span>
                <span className='quantity'>

                    <div className='arrow' onClick={() => removeItem(cartItem)}>&#10096;</div>
                        <span className='value'>{ quantity }</span>
                    <div className='arrow' onClick={() => addItem(cartItem)}>&#10097;</div>

                </span>
                <span className='price'>{ price }</span>
                <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
            </div>
    )
}
const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(
    null, mapDispatchToProps
    )(CheckoutItem)