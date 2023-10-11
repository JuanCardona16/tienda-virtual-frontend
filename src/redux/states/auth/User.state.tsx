import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../models";
import { EmptyAuthState } from "./constant/EmptyAuthState";
import { singin } from "../../../services/auth.service";
import { AppStore } from "../../store";

interface initialState {
  user: User,
}

const initialState: initialState = {
  user: {
    uuid: "",
    username: "",
    email: "",
    password: ""
  }
}

export const authSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    resetUser: () => {
      return EmptyAuthState;
    }
  },
  extraReducers(builder) {
      builder
        .addCase(singin.fulfilled, (state, action: PayloadAction<initialState>) => {
          state.user = action.payload.user
        })
  },
})

export const { resetUser } = authSlice.actions;
export const selectUserInfo = (state: AppStore) => state.auth.user;

export default authSlice.reducer;
