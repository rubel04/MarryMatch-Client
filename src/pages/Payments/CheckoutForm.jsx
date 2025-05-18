import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const { user } = useAuth();
  const { id } = useParams();
  const price = 5;
  const { data: bioData = [] } = useQuery({
    queryKey: "biodata",
    queryFn: async () => {
      const res = await axiosSecure.get(`/biodata/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
        timer: 2000,
      });
      setProcessing(false);
    } else {
      console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      Swal.fire({
        icon: "error",
        text: confirmError.message,
        timer: 2000,
      });
      setProcessing(false);
    } else {
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          biodataId: bioData?.biodataId,
          name: bioData?.name,
          email: bioData?.email,
          userName: user?.displayName,
          userEmail: user?.email,
          mobile: bioData?.mobile,
          price: price,
          transactionId: paymentIntent?.id,
          date: new Date(), // convert utc date , use moment js
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", paymentInfo);
        if (res?.data?.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Payment successfully",
            text: "Please wait for admin approval to access the contact information.",
            timer: 2000,
          });
          setProcessing(false);
          navigate("/dashboard/contact-requests");
        }
      }
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Helmet>
        <title>Complete Your Payment | Checkout | Marry Match</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full mx-auto bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center text-gray-700">
          Payment Info
        </h2>

        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Biodata ID
          </label>
          <input
            type="text"
            value={id}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-700"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-600">
            Card Details
          </label>
          <div className="p-3 border border-gray-300 rounded bg-white">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-[#F1494C] hover:bg-[#d9383b] text-white font-semibold py-2 px-4 rounded cursor-pointer"
        >
          {processing ? "Processing..." : "Pay & Request"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
