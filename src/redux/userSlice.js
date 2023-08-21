import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchLogin = createAsyncThunk('users/login', 
  async({email, password}, {rejectWithValue}) => {

    try {
      const response = await axios.get(`${BASE_URL}/users/login`, {
        params:{
          email, 
          password
        }
      } )
      return response.data;
    } catch(err){
      if(!err.response){
        throw err
      }
      return rejectWithValue(err.response.data);
    }
    
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
    errorMessage: null, 
  }, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false; 
        state.error = false; 
        state.errorMessage = null;
        state.name = action.payload.name;
        state.isAdmin = action.payload.is_admin;
        state.id = action.payload.id;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false; 
        state.error = true;
        state.errorMessage = action.payload.message;
      })
  }
});

export default userSlice;