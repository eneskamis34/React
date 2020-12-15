import React, {Components} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Components {
    render(){
        return(
            <StripeCheckout
            amount={500}
            token = {token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE}
            />
        )
    }
}
export default Payments;