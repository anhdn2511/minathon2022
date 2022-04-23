import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import menuReducer from './menuSlice'

import runningReducer from './runningSlice'

export default configureStore({
  reducer: {
    profile: profileReducer,
    menu: menuReducer,
    running: runningReducer
  }
})