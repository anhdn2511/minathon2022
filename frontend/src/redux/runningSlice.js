import { createSlice } from "@reduxjs/toolkit";
import { routeSession } from "./fake/runningSession";


const initialState ={
  distance: 0,
  duration: 0,
  pace: 0,
  burned: 0,
  active : true
}

const runningSlice = createSlice({
  name: 'running',
  initialState,
  reducers: {
    updateState: (state, action) => {
      const distance = state.distance + action.payload.distance
      const duration = state.duration + action.payload.duration
      const pace = distance === 0 ? 0 : duration / (distance * 60)
      const burned = 11.5 * distance / (duration / 3600) * 68 / 200
      
      return {
        ...state,
        distance: distance,
        duration: duration,
        pace: pace,
        burned: burned
      }
    }, 
    resetState: (state) => {
      return initialState
    }
  }
})

export const { updateState, resetState } = runningSlice.actions
export default runningSlice.reducer