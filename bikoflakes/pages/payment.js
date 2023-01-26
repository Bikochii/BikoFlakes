import React from "react";
import MultiStep from "../components/MultiStep";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function payment() {
  const router = useRouter();
  const {
    formState: { errors },
  } = useForm();
  const submitHandler = () => {
    router.push("/payment");
  };
  return (
    <Layout title="Payment Option">
      <MultiStep activeStep={1} />
      <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h1 className="mb-6 text-xl">Payment Option</h1>

        <div className="mb-4">
          <input
            id="paypal"
            label="PayPal"
            name="paymentOption"
            className="p-2 outline-none focus:ring-0"
            type="radio"
          />
          <label className="p-2">Cash</label>
        </div>

        <div className="mb-4">
          <input
            id="paypal"
            label="PayPal"
            name="paymentOption"
            className="p-2 outline-none focus:ring-0"
            type="radio"
          />
          <label className="p-2">Bitcoin</label>
        </div>

        <div className="mb-4">
          <input
            id="paypal"
            label="PayPal"
            name="paymentOption"
            className="p-2 outline-none focus:ring-0"
            type="radio"
          />
          <label className="p-2">Cash on Kralle</label>
        </div>

        <div className="mb- flex justify-between">
          <button
            onClick={() => router.push("/shipping")}
            type="button"
            className="default-button"
          >
            Back
          </button>
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}
