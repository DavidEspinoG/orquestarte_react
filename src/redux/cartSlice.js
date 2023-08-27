import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart', 
  initialState: {
    elements: [],
    cartExist: false,
    total: 0,
  },
  reducers: {
    getCartFromLocalStorage: (state) => {
      const localCart = JSON.parse(sessionStorage.getItem('cart'));
      if(localCart){
        console.log(localCart)
        state.elements = localCart.elements;
        state.total = localCart.total;
        state.cartExist = localCart.cartExist;
      }
    },
    addElement: (state, action) => {
      state.elements.push(action.payload);
      state.cartExist = true;
      state.total += action.payload.price;
      sessionStorage.setItem('cart', JSON.stringify(state));
    },
    removeElement: (state, action) => {
      const newArray = [...state.elements];
      const index = newArray.findIndex(object => object.id === action.payload.id);
      newArray.splice(index, 1);
      state.elements = newArray;
      state.total -= action.payload.price;
      if(newArray.length === 0){
        state.cartExist = false;
      };
      sessionStorage.setItem('cart', JSON.stringify(state))
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