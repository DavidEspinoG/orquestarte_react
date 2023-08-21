import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    isAdmin: false, 
    id: null
  }
});

export default userSlice;