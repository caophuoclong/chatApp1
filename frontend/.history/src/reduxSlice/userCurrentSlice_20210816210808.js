import { createSlice } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "inforUser",
  initialState: [],
  reducers: {
    addNewUser: (state, action) => {
      return action.payload;
    },
    addCurrentUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = currentUser;
export const { addNewUser, addCurrentUser } = actions;
export default reducer;
