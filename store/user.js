import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  zipCode: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpUser: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.number = action.payload.number;
      state.zipCode = action.payload.zipCode;
    },
    signInUser: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUpUser, signInUser } = userSlice.actions;

export default userSlice.reducer;
