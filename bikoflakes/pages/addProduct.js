import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

function AddProduct() {
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
    <Layout title="Add Product">
      <h1 className="mb-4 text-xl">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={formData.countInStock}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
            rows={5}
            required
          />
        </div>

        <button className="primary-button">Add Product</button>
      </form>
    </Layout>
  );
}

export default AddProduct;
