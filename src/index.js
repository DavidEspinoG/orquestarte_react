import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode options={{
    clientId:'AdOcpRAfXLtGx5v5e7SXngEU5PavxoOZtxvmfyduUS7JkYZZIkOVBqJUgG43U9FSibqoIR4UkVlKPEp8',
    currency: 'MXN'
  }}>
    <PayPalScriptProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>
);

