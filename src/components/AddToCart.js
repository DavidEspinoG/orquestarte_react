import React from "react";
import '../styles/AddToCart.css';
import { useDispatch } from "react-redux";
import { addElement } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { removeElement } from "../redux/cartSlice";

const AddToCart = ({month}) => {
  const cart = useSelector(state => state.cart.elements);
  const cartIds = cart.map(element => element.id);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addElement(month));
  };
  const handleRemoveFromCart = () => {
    dispatch(removeElement(month.id));
  };
  const onCart = cartIds.includes(month.id);
  return(
    <button 
      className="add-to-cart-button"
      onClick={onCart ? handleRemoveFromCart : handleAddToCart}
    >
      {onCart ? 'Añadido' : 'Añadir al carrito'}
    </button>
  )
};

export default AddToCart;