import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  userEmail: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setting users
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName
      state.userEmail = action.payload.userEmail
    },
    // logout
    setUserLogOutState: state => {
      state.userName = null
      state.userEmail = null
    }
  },
});
const musicListSlice = createSlice({
  name: 'musicList',
  initialState: {
    musicList: [],
  },
  reducers: {
    setMusic: (state, action) => {
      state.musicList = action.payload;
    },
  },
});
const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    activeTheme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      return {
        activeTheme: state.activeTheme === 'light' ? 'dark' : 'light',
      };
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export const { setMusic } = musicListSlice.actions;
export const { toggleTheme } = themeSlice.actions;

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail

export const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
    musicList: musicListSlice.reducer,
    theme: themeSlice.reducer,
  }),
});