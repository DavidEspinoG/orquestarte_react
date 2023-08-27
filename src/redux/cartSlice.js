import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart', 
  initialState: {
    ids: [], 
    elements: [],
  },
  reducers: {
    addElement: (state, action) => {
      state.elements.push(action.payload);
      state.ids.push(action.payload.id);
    }
  }
});

export const { addElement } = cartSlice.actions;
export default cartSlice;