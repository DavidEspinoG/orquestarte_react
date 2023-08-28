import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PAY_PAL_CLIENT_ID } from './secrets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider options={{
      clientId: PAY_PAL_CLIENT_ID,
      currency: 'MXN'
     }}>
      <Provider store={store}>
        <App />
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

