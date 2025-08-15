import {ReactElement} from 'react';

import {CardElement} from '@stripe/react-stripe-js';

import useStripePay from '../hooks/useStripePay';
import './style.css';

const CheckoutForm = (): ReactElement => {
    const {createPayment, isLoading, isPaymentCompleted, totalAmount} =
        useStripePay();

    return (
        <div className="checkout-form">
            <CardElement />
            <button
                className="buy-products-button"
                onClick={createPayment}
                disabled={!isPaymentCompleted}>
                {isLoading ? 'Processing...' : `Pay $ ${totalAmount}`}
            </button>
        </div>
    );
};

export default CheckoutForm;
