import { createSlice } from "@reduxjs/toolkit";
import { profileDB } from "./profileData";

var newProfile = 
  {
  name: 'Ronaldo',
  avatar: 'https://i.imgur.com/LWMwN1k.jpg',
  image: 'https://i.imgur.com/LWMwN1k.jpg',
  tree: 1024,
  badges: 'Rookie',
  routes: [

  ],
  friends: [],
  records: [{ date: "Sat Apr 23 2022", distance: 5.12 }, { date: "Sat Apr 23 2022", distance: 3.42 }]
}



const profileSlice = createSlice({
  name: 'profile',
  initialState: {...profileDB[0]},
  reducers: {
    toggle(state){
      console.log(profileDB)

      if(state.name === profileDB[0].name){
        state = profileDB[1]
      }
      else{
        state = profileDB[0]
      }
      return state
    },
    updateFriend(state, action){

      const loveName = action.payload
      state.friends.push(loveName)
      
      for(let i = 0; i < profileDB.length; i++){
        if(profileDB[i].name === state.name){
          profileDB[i].friends = [loveName]

        }
      }
      return state
    }
  }
})
export const {toggle, updateFriend} = profileSlice.actions

export default profileSlice.reducer