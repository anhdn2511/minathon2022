import { createSlice } from "@reduxjs/toolkit";

const profile =
{
  name: 'Cu Do Thanh Nhan',
  account: 'cudothanhnhan',
  tree: 1024,
  badges: 'Rookie',
  routes: [
    'Tan Lap',
    'Vanh Dai DHQG',
    'Nguyen Du'
  ]
}


const profileSlice = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {

  }
})

export default profileSlice.reducer