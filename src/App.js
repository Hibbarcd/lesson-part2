import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignUpAndSignInPage from './pages/signIn-signup/signin-signup.component'

import Header from './components/header/header.component'


class App extends React.Component {


    unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
    }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  
render() {
  return (
    <div className="App">
    <Header />
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' 
          render= {() => 
            this.props.currentUser ? (
            <Redirect to='/' /> ) : 
            (< SignUpAndSignInPage/> 
          )}
            />
    </Switch>
    </div>
  );
}
}
//=====================================================redux code===================================================
const mapStateToProps = (state) =>  createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
//==============================================================================================================

export default connect(mapStateToProps, mapDispatchToProps)(App);
