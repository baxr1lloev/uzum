import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./features/uzumData/dataSlice";
import  likedSlice  from "./features/liked/LikedSlice";


export const store = configureStore({
  reducer: {
    someReducer: dataSlice,
    liked: likedSlice
  },
});


export default store;