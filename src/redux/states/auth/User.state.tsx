import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../models";
import { EmptyAuthState } from "./constant/EmptyAuthState";
import { singin, singup } from "../../../services/auth.service";
import { AppStore } from "../../store";

interface initialState {
  user: User,
  token: string
}

const initialState: initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    password: ""
  },
  token: ""
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
        .addCase(singin.fulfilled, (state) => {
          state.user = {
            id: "",
            username: "",
            email: "",
            password: ""
          },
          state.token = ""
        })
        .addCase(singin.rejected, (state) => {
          state.user = {
            id: "",
            username: "",
            email: "",
            password: ""
          },
          state.token = ""
        })
        .addCase(singup.fulfilled, (state, action: PayloadAction<initialState>) => {
          state.user = action.payload.user
          state.token = action.payload.token
        })
  },
})

export const { resetUser } = authSlice.actions;
export const selectUserInfo = (state: AppStore) => state.auth;

export default authSlice.reducer;
