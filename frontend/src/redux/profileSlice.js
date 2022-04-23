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
  ],
  friends: [],
  records: [{date: "Sat Apr 23 2022", distance: 5.12}, {date: "Sat Apr 23 2022", distance: 3.42}]
}


const profileSlice = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {

  }
})

export default profileSlice.reducer