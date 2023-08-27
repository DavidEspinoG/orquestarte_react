import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart', 
  initialState: {
    ids: [], 
    elements: [],
    cartExist: false,
  },
  reducers: {
    getCartFromLocalStorage: (state) => {
      const localCart = JSON.parse(localStorage.getItem('cart'));
      if(localCart){
        state.ids = localCart.ids;
        state.elements = localCart.elements;
        state.cartExist = localCart.cartExist;
      }
    },
    addElement: (state, action) => {
      state.elements.push(action.payload);
      state.ids.push(action.payload.id);
      state.cartExist = true;
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const { addElement, getCartFromLocalStorage } = cartSlice.actions;
export default cartSlice;