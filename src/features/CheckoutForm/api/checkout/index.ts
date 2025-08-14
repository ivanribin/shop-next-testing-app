import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

type PaymentIntentResponse = {
    clientSecret: string | null;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PaymentIntentResponse | { error: string }>
): Promise<void> {
    try {
        if (req.method !== "POST") {
            res.setHeader("Allow", "POST");
            res.status(405).json({ error: "Method Not Allowed" });
            return;
        }

        const { amount } = req.body;

        if (!amount || typeof amount !== "number") {
            res.status(400).json({ error: "Invalid amount" });
            return;
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err: unknown) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
