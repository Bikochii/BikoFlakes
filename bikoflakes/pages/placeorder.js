import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import MultiStep from '../components/MultiStep';
import { Store } from '../utils/Store';

export default function PlaceOrderScreen() {
  const router = useRouter();
  const { state } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  return (
    <Layout title="Place Order">
      <MultiStep activeStep={3} />
      <h1 className="mb-4 text-xl">Place Order</h1>

      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="overflow-x-auto md:col-span-3">
          <div className="card  p-5">
            <h2 className="mb-2 text-lg">Shipping Address</h2>
            <div className="text-l font-bold">
              Anton Pelezki <br></br>
              Stuifenstraße 4 73525 Schwäbisch Gmünd
            </div>
            <div>
              <Link href="/shipping">Edit</Link>
            </div>
          </div>
          <div className="card  p-5">
            <h2 className="mb-2 text-lg">Payment Method</h2>
            <div className="text-l font-bold">Bitcoin</div>
            <div>
              <Link href="/payment">Edit</Link>
            </div>
          </div>
          <div className="card overflow-x-auto p-5">
            <h2 className="mb-2 text-lg">Order Items</h2>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Item</th>
                  <th className="    p-5 text-right">Quantity</th>
                  <th className="  p-5 text-right">Price</th>
                  <th className="p-5 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className=" p-5 text-right">{item.quantity}</td>
                    <td className="p-5 text-right">${item.price}</td>
                    <td className="p-5 text-right">
                      ${item.quantity * item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Link href="/cart">Edit</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card  p-5">
            <h2 className="mb-2 text-lg">Order Summary</h2>
            <ul>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Items</div>
                  <div>€</div>
                </div>
              </li>

              <li>
                <div className="mb-2 flex justify-between">
                  <div>Shipping</div>
                  <div>Always free</div>
                </div>
              </li>
              <li>
                <div className="mb-2 flex justify-between">
                  <div>Total</div>
                  <div>€</div>
                </div>
              </li>
              <li>
                <button
                  className="primary-button w-full"
                  onClick={() =>
                    alert('Order has been placed') && router.push('//')
                  }
                >
                  Place Order
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
