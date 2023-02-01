import React from 'react';
import Layout from '../components/Layout';
import MultiStep from '../components/MultiStep';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function shipping() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {
    router.push('/payment');
  };

  return (
    <Layout title="Shipping Address">
      <MultiStep activeStep={0} />
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Address</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>

          <input
            type="name"
            {...register('name', {
              required: 'Please enter your name',
              pattern: {
                message: 'Please enter your name',
              },
            })}
            className="w-full"
            id="name"
            autoFocus
          ></input>
          {errors.name && (
            <div className="text-red-700">{errors.name.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Street address</label>
          <input
            type="address"
            {...register('address', {
              required: 'Please enter your Streeet address',
              pattern: {
                message: 'Please enter your Street address',
              },
            })}
            className="w-full"
            id="address"
            autoFocus
          ></input>
          {errors.address && (
            <div className="text-red-700">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">Town / City</label>
          <input
            type="city"
            {...register('city', {
              required: 'Please enter your city',
              pattern: {
                message: 'Please enter your city',
              },
            })}
            className="w-full"
            id="address"
            autoFocus
          ></input>
          {errors.address && (
            <div className="text-red-700">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postcode</label>

          <input
            type="postalCode"
            {...register('postalCode', {
              required: 'Please enter your Postcode',
              pattern: {
                value: /\d{5}/i,
                message: 'Invalid Postcode (e.g.: 12345)',
              },
            })}
            className="w-full"
            id="postalCode"
            autoFocus
          ></input>
          {errors.postalCode && (
            <div className="text-red-700">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>

          <input
            type="country"
            {...register('country', {
              required: 'Please enter your country',
              pattern: {
                value: /[a-zA-Z]{2,}/i,
                message: 'Invalid country',
              },
            })}
            className="w-full"
            id="country"
            autoFocus
          ></input>
          {errors.country && (
            <div className="text-red-700">{errors.country.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form>
    </Layout>
  );
}
