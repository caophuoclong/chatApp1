import { createSlice } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "inforUser",
  initialState: {},
  reducers: {
    addNewUser: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = currentUser;
export const { addNewUser } = actions;
export default reducer;
