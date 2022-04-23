import { createSlice } from '@reduxjs/toolkit'

const USER_1 = 'David Beckham'
const USER_2 = 'Alice Wonderland'
const initialState = {
  name: 'David Beckham',
  friends: [],
  records: [{date: "Sat Apr 23 2022", distance: 5.12}, {date: "Sat Apr 23 2022", distance: 3.42}]
}

let accountDB = {}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {

    toggleAccount: (state) => {
      console.log('hohoh')
      if(state.name === USER_1){
        state.name = USER_2
      }
      else {
        state.name = USER_1
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleAccount } = accountSlice.actions

export default accountSlice.reducer