import { configureStore } from "@reduxjs/toolkit";
import { iTunesApi } from "@/libs/ITunesApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [iTunesApi.reducerPath]: iTunesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(iTunesApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
