import React from 'react';

export default function MultiStep({ activeStep }) {
  return (
    <div className=" mb-5 flex flex-wrap">
      {['Shipping', 'Payment', 'Place Order'].map((step, index) => (
        <div
          key={step}
          className={`flex-1 border-b-4 text-center 
                            ${
                              index <= activeStep
                                ? 'border-lime-600 text-lime-800 '
                                : 'border-gray-500 text-gray-500'
                            }
            `}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
