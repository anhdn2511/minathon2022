import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import menuReducer from './menuSlice'


export default configureStore({
  reducer: {
    profile: profileReducer,
    menu: menuReducer
  }
})