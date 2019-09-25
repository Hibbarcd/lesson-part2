import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import  CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles'

import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
            <LogoContainer to='/'>
            <Logo className= 'logo' />
            </LogoContainer>
            
        <OptionsContainer>
            <OptionLink to='/shop'>
            SHOP
            </OptionLink>
            <OptionLink to='/shop'>
            CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionDiv onClick={ () => auth.signOut() }>
                Sign Out
                </OptionDiv>
                :
                <Link className='option' to='/signin'>Sign In</Link>
            }
            <CartIcon />
        </OptionsContainer>

        {  hidden ? null : <CartDropdown />  }

    </HeaderContainer>
)

const mapStateToProps = (state) =>  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)