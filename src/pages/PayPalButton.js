// src/pages/PayPalButton.js
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount }) => {
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AQJnKGofUdV1yyAdRB9Q7t-C6ismrFQ1rQqesmADh96wi_FBSzi9kNZHPy2VTha4FGN-s0L8RxUQhDSp",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount, // use the amount prop from Cart
              },
            }],
          });
        }}
        onApprove={handleApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
