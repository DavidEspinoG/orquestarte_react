import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

export const fetchStudentsFromCurrentUser = createAsyncThunk(
  'students/getStudentsFromUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const headers = { Accept: 'application/json', Authorization: `Bearer ${state.user.token}` };
      const response = await axios.get(`${BASE_URL}/students_from_user`, { headers });
      return response.data;
    } catch (err) {
      if (!err) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const fetchNewUser = createAsyncThunk(
  'students/newStudent',
  async ({ name, lastName }, { getState, rejectWithValue, dispatch }) => {
    try {
      const state = getState();
      const headers = { Accept: 'application/json', Authorization: `Bearer ${state.user.token}` };
      const body = {
        student: {
          first_name: name,
          last_name: lastName,
        },
      };
      const response = await axios.post(`${BASE_URL}/students`, body, { headers });
      dispatch(fetchStudentsFromCurrentUser());
      return response.data;
    } catch (err) {
      if (!err) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    currentUserStudents: [],
    loading: false,
    error: false,
    message: null,
    newStudentSuccess: false,
  },
  reducers: {
    deleteStudents: (state) => {
      state.currentUserStudents = [];
    },
    newStudentSuccessFalse: (state) => {
      state.newStudentSuccess = false;
    },
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
        if (action.payload) {
          state.message = action.payload;
        } else {
          state.message = 'Hubo un problema con el servidor, por favor intenta de nuevo';
        }
      })
      .addCase(fetchNewUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewUser.fulfilled, (state) => {
        state.loading = false;
        state.newStudentSuccess = true;
      })
      .addCase(fetchNewUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        if (action.payload) {
          state.message = action.payload.message;
        } else {
          state.message = 'Hubo un problema con el servidor, por favor intenta de nuevo';
        }
      });
  },
});

export const { deleteStudents, newStudentSuccessFalse } = studentsSlice.actions;
export default studentsSlice;
