import { createSlice } from "@reduxjs/toolkit";
import { routeSession } from "./fake/runningSession";

const runningSlice = createSlice({
  name: 'running',
  initialState: {
    route: [routeSession[0]],
    distance: 0,
    duration: 0,
    pace: 0,
    burned: 0
  },
  reducers: {
    changeState: (state, action) => {
      return [...state, action.payload]
    }
  }
})

export const { changeState } = runningSlice.actions
export default runningSlice.reducer