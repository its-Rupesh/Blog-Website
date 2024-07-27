import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../feature/Post/PostSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
