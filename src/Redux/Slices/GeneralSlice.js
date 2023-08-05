import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from './../../axios';

export const fetchPosts = createAsyncThunk('posts.fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});

export const fetchAuth = createAsyncThunk('posts.fetchAuth', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

const GeneralSlice = createSlice({
  name: 'general',
  initialState: {
    data: null,
    status: 'loading',
    sort: {
      value: 0,
    },
    posts: {
      items: [],
      status: 'loading',
    },
    filter: {
      name: 'популярности (DESC)',
      property: 'rating',
    },
    isAuth: false,
  },
  reducers: {
    logout: (state) => {
      state.data = null;
    },
    changeSort: (state, action) => {
      state.sort = action.payload;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.posts.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts.status = 'loaded';
      state.posts.items = action.payload;
    },
    [fetchPosts.rejected]: (state) => {
      state.posts.status = 'error';
      state.posts.items = [];
    },
    [fetchUserData.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state) => {
      state.status = 'error';
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = 'error';
      state.data = null;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.general.data);

export const { changeSort, changeFilter, logout } = GeneralSlice.actions;

export default GeneralSlice.reducer;
