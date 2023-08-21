import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchLogin = createAsyncThunk('users/login', 
  async({email, password}) => {
    const response = await axios.get(`${BASE_URL}/users/login`, {
      params:{
        email, 
        password
      }
    } )
    return response.data;
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState: {
    name: '',
    isAdmin: false, 
    id: null,
    loading: false,
    error: null, 
    test: null,
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false; 
        state.error = null; 
        state.test = action.payload;
      })
  }
});

export default userSlice;