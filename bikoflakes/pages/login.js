import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { supabase } from '@supabase/supabase-js'
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const submitHandler = ({ email, password }) => {
        console.log(email, password);
    };


    async function login(email, password, navigate) {
        try {
            const { error } = await supabase.auth.signIn({ email, password });
            if (error) throw error;
            alert('logged in')
            navigate.push('/Home');
        }
        catch (error) {
            alert(error.message);
        }
    };

    const signUp = async (email, password, navigate) => {
    try {
            const { error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;
            alert('logged in')
            navigate.push('/');
        }
        catch (error) {
            alert(error.message);
        }
        
};
    
    

  return (
      <Layout title="Login">
          <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
              <h1 className='mb-4 text-xl'>Login</h1>
              <div className='mb-4'>
                  <label htmlFor='email'>E-mail</label>

                  <input type="email"
                      {...register("email",
                          { required: "Please enter email",
                              pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                              },
                          })}
                      className="w-full"
                      id="email"
                      autoFocus></input>
                  {errors.email && (<div className='text-red-700'>{errors.email.message}</div>)}
                  
              </div>
              <div className='mb-4'>
                  <label htmlFor='password'>Password</label>
                  <input type="password"
                      {...register("password",
                          { required: "Please enter password",
                              minLength: { value: 8, message:  "password must have at least 8 characters"   
                              },
                          })}
                      className="w-full"
                      id="password"
                      autoFocus
                  ></input>
                  {errors.password && (<div className='text-red-700'>{errors.password.message}</div>)}
              </div>
              <div className='mb-4'>  
                  <button className='primary-button' onClick={() => login(email,password,)}>Login
                      </button>  
              </div>
              <div className='mb-4'>
                  No account yet?  
                  <Link href="register"> Register</Link>
              </div>
          </form>
   </Layout>
  )
}
