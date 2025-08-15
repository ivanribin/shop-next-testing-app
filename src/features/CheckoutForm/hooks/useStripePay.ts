import {useState} from 'react';
import {useSelector} from 'react-redux';

import {TRootState} from '@shared/store';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';

const useStripePay = () => {
    const totalAmount: number = useSelector(
        (state: TRootState) => state.cart.cost,
    );

    const stripe = useStripe();
    const elements = useElements();

    const [isLoading, setIsLoading] = useState(false);

    const createPayment = async () => {
        if (!stripe || !elements) return;

        setIsLoading(true);

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({amount: Math.floor(totalAmount * 100)}),
            });
            const data = await response.json();

            console.log('LOADED DATA AFTER CHECKOUT: ', data);

            if (!data.clientSecret)
                throw new Error('No clientSecret returned from server');

            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)!,
                },
            });

            if (result.error) {
                alert(result.error.message);
            } else if (result.paymentIntent?.status === 'succeeded') {
                alert('Payment successful!');
            }
        } catch (err: unknown) {
            alert((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const isPaymentCompleted: boolean = !isLoading || !stripe;

    return {
        createPayment,
        isLoading,
        isPaymentCompleted,
        totalAmount,
    };
};

export default useStripePay;
