import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    isFetching: false,
    error: false,
    posts: [],
  },
  reducers: {
    //Fetching posts
    setFetchPostStart: (state) => {
      state.isFetching = true;
    },
    setFetchPostFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    setFetchPostSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.posts = action.payload;
    },

    //Create a new post
    setCreatePostStart: (state) => {
      state.isFetching = true;
    },
    setCreatePostFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    setCreatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.posts = action.payload;
    },
    //Update a  post
    setUpdatePostStart: (state) => {
      state.isFetching = true;
    },
    setUpdatePostFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    setUpdatePostSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.posts = action.payload;
    },
    //Update a  post
    setDeletePostStart: (state) => {
      state.isFetching = true;
    },
    setDeletePostFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    setDeletePostSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
      state.posts = action.payload;
    },
  },
});

export const {
  setCreatePostFailure,
  setCreatePostStart,
  setCreatePostSuccess,
  setDeletePostFailure,
  setDeletePostStart,
  setDeletePostSuccess,
  setFetchPostFailure,
  setFetchPostStart,
  setFetchPostSuccess,
  setUpdatePostFailure,
  setUpdatePostStart,
  setUpdatePostSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
