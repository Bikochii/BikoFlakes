import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
//import { supabase } from '@supabase/supabase-js'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

export default function RegisterScreen() {
  const supabase = useSupabaseClient();
  console.log(supabase);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

  async function signUp(email, password) {
    console.log(email, password);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: 'anton.pelezki@gmail.com',
        password: '123456789',
      });
      console.log(data, error);
      if (error) throw error;
      alert('you just signed Up!');
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Layout title="Register">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Register</h1>

        <div className="mb-4">
          <label htmlFor="name">Full Name</label>
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
          <label htmlFor="email">E-mail</label>

          <input
            type="email"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-700">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register('password', {
              required: 'Please enter password',
              minLength: {
                value: 6,
                message: 'password must have at least 6 characters',
              },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-700">{errors.password.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="w-full" id="confirmpassword" />
        </div>

        <div className="mb-4">
          <button
            className="primary-button"
            onClick={() => signUp(email, password)}
          >
            SignUp
          </button>
        </div>
        <div className="mb-4">
          Already have an account?
          <Link className="text-blue-600" href="login">
            &nbsp;Login
          </Link>
        </div>
      </form>
    </Layout>
  );
}
