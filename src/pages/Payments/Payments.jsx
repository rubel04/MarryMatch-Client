import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payments = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
    </div>
  );
};

export default Payments;
