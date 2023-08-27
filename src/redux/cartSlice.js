import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart', 
  initialState: {
    elements: [],
    cartExist: false,
  },
  reducers: {
    getCartFromLocalStorage: (state) => {
      const localCart = JSON.parse(sessionStorage.getItem('cart'));
      if(localCart){
        state.elements = localCart.elements;
        state.cartExist = localCart.cartExist;
      }
    },
    addElement: (state, action) => {
      state.elements.push(action.payload);
      state.cartExist = true;
      sessionStorage.setItem('cart', JSON.stringify(state));
    },
    removeElement: (state, action) => {
      const newArray = [...state.elements];
      const index = newArray.findIndex(object => object.id === action.payload);
      newArray.splice(index, 1);
      state.elements = newArray;
      if(newArray.length === 0){
        state.cartExist = false;
      };
    }, 
    emptyCart: (state) => {
      state.elements = [];
      state.cartExist = false; 
      sessionStorage.removeItem('cart');
    },
  }
});

export const { addElement, getCartFromLocalStorage, removeElement, emptyCart } = cartSlice.actions;
export default cartSlice;