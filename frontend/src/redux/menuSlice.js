import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
      path: '/'
  },
  reducers: {
    change(state, action){
      console.log('hoho ' +action.payload )
      state = {path: action.payload}
      return state
    }
  }
})
export const {change} = menuSlice.actions

export default menuSlice.reducer