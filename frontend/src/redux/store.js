import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import runningReducer from './runningSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    running: runningReducer
  }
})