import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { Store } from '../../utils/Store';
import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const [products, setProducts] = useState([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    async function fetch() {
      let { data, error } = await supabase.from('Products').select('*');
      console.log(data);
      setProducts(data);
    }
    fetch();

    return () => {};
  }, []);

  const product = products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/"> back to roducts</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></img>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>{' '}
            </li>
            <li>Category: {product.category} </li>
            <li>Provider: {product.provider}</li>
            <li>
              {product.rating} of {product.numReviews} Reviews
            </li>
            <li>description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex-justify-between">
              <div>Price</div>
              <div>€{product.price}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
