import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import studentsSlice from "./studentsSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    students: studentsSlice.reducer,
  }
});

export default store;