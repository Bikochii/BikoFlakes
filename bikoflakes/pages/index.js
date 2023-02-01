import Layout from '../components/Layout';
import Productitem from '../components/Productitem';

import { useState, useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Home() {
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

  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Productitem product={product} key={product.slug}></Productitem>
        ))}
      </div>
    </Layout>
  );
}
