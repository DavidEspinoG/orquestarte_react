import { BASE_URL } from '../constants';
import store from '../redux/store';

const createOrder = (cart) => {
  const state = store.getState();
  return fetch(`${BASE_URL}/paypal/create-paypal-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cart: state.cart.elements,
    }),
  })
    .then((response) => response.json())
    .then((order) => order.id);
};

export default createOrder;
