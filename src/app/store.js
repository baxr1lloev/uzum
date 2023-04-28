import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./features/uzumData/dataSlice";
import  likedSlice  from "./features/liked/LikedSlice";
import pushSlice from "./features/push/pushSlice";


export const store = configureStore({
  reducer: {
    someReducer: dataSlice,
    liked: likedSlice,
    push: pushSlice
  },
});


export default store;