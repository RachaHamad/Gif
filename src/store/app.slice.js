import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    token: 'gv5zjXZW7Hw6K8CJiRnkvWHWvhFcVsHZ',
    userInputToken: '',
    userSearchInput: '',
    searchResults: [],
    language: 'en',
    gif: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInputToken: (state, action) => {
      state.userInputToken = action.payload;
    },
    setUserSearchInput: (state, action) => {
      state.userSearchInput = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setGif: (state, action) => {
      state.gif = action.payload;
    },
  },
});

export const {
  setToken,
  setUserInputToken,
  setUserSearchInput,
  setSearchResults,
  setLanguage,
  setGif,
} = appSlice.actions;

export default appSlice.reducer;
