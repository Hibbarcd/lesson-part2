
import React from 'react'
import {connect} from 'react-redux'
import  './cart-dropdown.style.scss'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCartItems} from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-item.component'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = ({cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem 
                    key={cartItem.id} 
                    item={cartItem} />
                ))
                :
                <span className='empty-message'>Your Cart is Empty</span>
        } 
        </div>
            <CustomButton onClick={()=> {
                history.push('/checkout')
                dispatch(toggleCartHidden())
                }}>
                Go To Checkout
                </CustomButton>
        </div>
)
const mapStateToProps = state => createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))