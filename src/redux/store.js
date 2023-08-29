import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import studentsSlice from './studentsSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    students: studentsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
