import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import "./style.css";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handlePay = async () => {
        if (!stripe || !elements) return;

        setLoading(true);

        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 5000 }),
        });

        const data = await response.json();

        const result = await stripe.confirmCardPayment(data.clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)!,
            },
        });

        setLoading(false);

        if (result.error) {
            alert(result.error.message);
        } else if (result.paymentIntent?.status === "succeeded") {
            alert("Payment successful!");
        }
    };

    return (
        <div className="checkout-form">
            <CardElement />
            <button
                className="buy-products-button"
                onClick={handlePay}
                disabled={loading || !stripe}
            >
                {loading ? "Processing..." : "Pay $50"}
            </button>
        </div>
    );
};

export default function StripeCheckoutWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}
