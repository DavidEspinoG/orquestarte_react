import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";
import axios from "axios";

export const fetchStudentsFromCurrentUser = createAsyncThunk('students/getStudentsFromUser',
  async (_, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const headers = {Accept: 'application/json', Authorization: `Bearer ${state.user.token}`};
      const response = await axios.get(`${BASE_URL}/students_from_user`, {headers});
      return response.data;
    } catch(err) {
      if(!err){
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
    
  }
)

const studentsSlice = createSlice({
  name: 'students', 
  initialState: {
    currentUserStudents: [], 
    loading: false, 
    error: false, 
    message: null,
  }, 
  extraReducers: (builder) => {
    builder
    .addCase(fetchStudentsFromCurrentUser.pending, (state) => {
      state.loading = true; 
    })
    .addCase(fetchStudentsFromCurrentUser.fulfilled, (state, action) => {
      state.loading = false; 
      state.currentUserStudents = action.payload;
    })
    .addCase(fetchStudentsFromCurrentUser.rejected, (state, action) => {
      state.loading = false; 
      state.error = true; 
      if(action.payload){
        state.message = action.payload; 
      } else {
        state.message = 'Hubo un problema con el servidor, por favor intenta de nuevo';
      }
    })
  }
});
export default studentsSlice;