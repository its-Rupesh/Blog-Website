import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

let initialState = [
  {
    id: nanoid(),
    title: "Learning Redux-Toolkit",
    context: "I have learnt Nothing",
  },
  {
    id: nanoid(),
    title: "Not Learned So Far",
    context: "Working on Itt...",
  },
];

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { postAdded } = PostsSlice.actions;
export const selectAllPost = (state) => state.posts;
export default PostsSlice.reducer;
