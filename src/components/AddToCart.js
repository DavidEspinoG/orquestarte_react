import React from 'react';
import '../styles/AddToCart.css';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement } from '../redux/cartSlice';

function AddToCart({ month }) {
  const cart = useSelector((state) => state.cart.elements);
  const cartIds = cart.map((element) => element.id);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addElement(month));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeElement({ id: month.id, price: month.price }));
  };
  const onCart = cartIds.includes(month.id);
  return (
    <button
      className={onCart ? 'remove-from-cart-button' : 'add-to-cart-button'}
      onClick={onCart ? handleRemoveFromCart : handleAddToCart}
    >
      {onCart ? 'Quitar del carrito' : 'Añadir al carrito'}
    </button>
  );
}

export default AddToCart;
