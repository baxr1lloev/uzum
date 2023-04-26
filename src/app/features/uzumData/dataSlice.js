import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunk";

// export const fetchTodos = createAsyncThunk(
//   "data/fetchTodos",
//   async function () {
//     const response = await fetch("http://localhost:3000/goods");
//     const data = await response.json();
//     return data;
//   }
// );

export const dataSlice = createSlice({
  name: "goods",
  initialState: {
    goods: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      (state.status = "loading"), (state.error = null);
    },
    [getUsers.fulfilled]: (state, action) => {
      (state.status = "resolved"), (state.goods = action.payload);
    },
    [getUsers.rejected]: (state, action) => {},
  },
});


// export const {getUsers} = dataSlice.actions
export default dataSlice.reducer;
