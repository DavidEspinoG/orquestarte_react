import { BASE_URL } from '../constants';
import store from '../redux/store';

function onApprove(data) {
  const state = store.getState();
  return fetch(`${BASE_URL}/paypal/capture-payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      order_id: data.orderID,
      cart: state.cart.elements,
    }),
  })
    .then((response) => response.json())
    .then((orderData) => {
      const name = orderData.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
}

export default onApprove;
