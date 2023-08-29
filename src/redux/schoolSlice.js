import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

export const getSchools = createAsyncThunk(
  'schools/getSchools',
  async (_, { getState }) => {
    const state = getState();
    const url = `${BASE_URL}/schools`;
    const headers = { Accept: 'application/json', Authorization: state.user.token };
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response.data;
    }
    return response.message;
  },
);

const schoolsSlice = createSlice({
  name: 'schools',
  initialState: {
    schools: [],
    detailedSchool: {
      name: null,
      id: null,
    },
    loading: false,
    error: false,
    errorMessage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchools.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSchools.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = action.payload;
      })
      .addCase(getSchools.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      });
  },
});

export default schoolsSlice;
