import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    signInUser: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUpUser, signInUser } = userSlice.actions;

export default userSlice.reducer;
