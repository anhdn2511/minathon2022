import { createSlice } from "@reduxjs/toolkit";

function round(num) {
  return Math.round(num * 1000) / 1000;
}

const runningSlice = createSlice({
  name: 'running',
  initialState: {
    distance: 0.0,
    duration: 0,
    pace: 0,
    burned: 0
  },
  reducers: {
    updateState: (state, action) => {
      const newState = {
        distance: round(state.distance) + round(action.payload.distance),
        duration: state.duration + action.payload.duration,
        pace: state.duration / state.distance,
        burned: 11.5 * state.distance / (state.duration / 60) * 68 / 200
      }
      return newState
    }
  }
})

export const { updateState } = runningSlice.actions
export default runningSlice.reducer