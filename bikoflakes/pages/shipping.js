import React from 'react';
import Layout from '../components/Layout';
import MultiStep from '../components/MultiStep';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function shipping() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = () => {
    router.push('/payment');
  };

  return (
    <Layout title="Shipping Address">
      <MultiStep activeStep={1} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input className="w-full" id="fullName" autoFocus />
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input className="w-full" id="address" />
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input className="w-full" id="city" />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input className="w-full" id="postalCode" />
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input className="w-full" id="country" />
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}
