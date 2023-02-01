import React, { useContext } from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';

export default function Productitem({ product }) {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;

  const [products, setProducts] = useState([]);
  const supabase = useSupabaseClient();
  const router = useRouter();

  async function addToCard() {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    //router.push("/cart");
  }

  useEffect(() => {
    async function fetch() {
      let { data, error } = await supabase.from('Products').select('*');
      console.log(data);
      setProducts(data);
    }
    fetch();

    return () => {};
  }, []);

  //Pordukt thumbnaile erstellt
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            // src="https://joqwtcqtucsiandrqizn.supabase.co//storage/v1/object/public/images/burger.jpg"
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.provider}</p>
        <p>€{product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCard()}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
