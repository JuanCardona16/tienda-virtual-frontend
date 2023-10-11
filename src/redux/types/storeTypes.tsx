import ConfigureStore from "../store";

export type rootState = ReturnType<typeof ConfigureStore.getState>;
export type AppDispatch = typeof ConfigureStore.dispatch;
