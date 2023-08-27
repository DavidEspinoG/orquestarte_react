import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchSignUp = createAsyncThunk('/users/signup', 
  async({firstName, lastName, email, password, schoolCode }, {rejectWithValue}) => {
    try {
      const params = {
        user: {
          first_name: firstName, 
          last_name: lastName, 
          email: email,
          password: password,
        },
        school_code: schoolCode,
      }
      const response = await axios.post(`${BASE_URL}/users/signup`, params)
      return response.data
    } catch(err){
      if(!err){
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  }
);

export const fetchLogin = createAsyncThunk('users/login', 
  async({email, password}, {rejectWithValue}) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/login`, {
          email, 
          password
        })
      sessionStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch(err){
      if(!err.response){
        throw err
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: null,
    isAdmin: false, 
    id: null,
    loading: false,
    error: null,
    errorMessage: null,
    token: null,
    signUp: {
      success: false,
      message: '', 
      loading: false,
      error: false,
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.isAdmin = action.payload.is_admin;
      state.id = action.payload.id;
      state.token = action.payload.token;
    }, 
    logout: (state) => {
      state.name = null; 
      state.isAdmin = false; 
      state.id = null;
      state.token = null;
      sessionStorage.removeItem('user');
    },
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
        state.token = action.payload.token;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false; 
        state.error = true;
        state.errorMessage = 'Hubo un error en el servidor, favor de intentar más tarde';
      })
      .addCase(fetchSignUp.pending, (state) => {
        state.signUp.loading = true;
      })
      .addCase(fetchSignUp.fulfilled, (state, action) => {
        state.signUp.loading = false;
        state.signUp.success = true;
        state.signUp.message = action.payload;
      })
      .addCase(fetchSignUp.rejected, (state, action) => {
        state.signUp.loading = false;
        state.signUp.error = true;
        state.signUp.message = action.payload;
      })
  }
});

export const { setUser, logout } = userSlice.actions;

export default userSlice;