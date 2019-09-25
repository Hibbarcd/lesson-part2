import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_YuDqO3mB9Dr4hr6dKZMpi8Qy00kEhGGhdP'

    const onToken = token => {
        //logging created object that stripe api would use for actual purchase
        console.log(token)
        alert("Payment successful!")
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crown Medieval LLC.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is: $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton