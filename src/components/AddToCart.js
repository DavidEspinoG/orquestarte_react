import React from "react";
import '../styles/AddToCart.css';
import { useDispatch } from "react-redux";
import { addElement } from "../redux/cartSlice";
import { useSelector } from "react-redux";

const AddToCart = ({month}) => {
  const cartIds = useSelector(state => state.cart.ids);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addElement(month));
  };
  const onCart = cartIds.includes(month.id);
  return(
    <button 
      disabled={onCart}
      className="add-to-cart-button"
      onClick={handleClick}
    >
      {onCart ? 'Añadido' : 'Añadir al carrito'}
    </button>
  )
};

export default AddToCart;