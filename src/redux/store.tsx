import authSliceReducer from "./states/auth/User.state";
import { configureStore } from "@reduxjs/toolkit";
import { authState } from "./interfaces/auth.interface";

export interface AppStore {
  auth: authState
}

export const ConfigureStore = configureStore<AppStore>({
  reducer: {
    auth: authSliceReducer
  }
})

export default ConfigureStore;
