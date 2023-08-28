import { BASE_URL } from "../constants";

function onApprove(data) {
  return fetch(`${BASE_URL}/paypal/capture-paypal-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      orderID: data.orderID
    })
  })
  .then((response) => response.json())
  .then((orderData) => {
        const name = orderData.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
  });
}
