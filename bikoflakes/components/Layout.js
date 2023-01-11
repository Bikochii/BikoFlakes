import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useContext, useState, useEffect} from 'react';
import { Store } from '../utils/Store';

export default function Layout({ title, children }) {
    const { state,} = useContext(Store);
    const { cart } = state;
    const [cartItemsCount, setCartItemsCount] = useState(0);
    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
    }, [cart.cartItems]);

  return (
      <>
          <Head>
              <title>{title ? title + '- BikoFlakes': 'BikoFlakes'}</title>
        <meta name="description" content="Food-Delivery Webside" />
        <link rel="icon" href="/nice.ico" />
      </Head>
          <div className='flex min-h-screen flex-col justify-between'>
              <header>
                  <nav className='flex h-12 items-center px-4 justify-between shadow-md' >
                      <Link href='/'>
                          <a className='text-lg font-extrabold'>BikoFlakes</a>
                      </Link>
                      <div>
                          <Link href='/cart'>
                             
                              <a className='p-2'>
                                  Cart
                                  {cartItemsCount > 0 && (
                                      <span className='ml-1 rounded-full bg-lime-600 px-2 py-1 text-xs font-bold text-white'>
                                          {cartItemsCount}
                                      </span>
                                  )}
                              </a>
                          </Link>
                          <Link href='/Login'>
                              <a className='p-2'>Login</a>
                          </Link>
                      </div>
                  </nav>
              </header>
              <main className='container m-auto mt-4 px-4'>{children}</main>
              <footer className='flex h-10 justify-center items-center shadow-inner'>
                  <p>Copyright © 2023 BikoFlakes </p>
              </footer>
          </div>
      </>
  )
}
