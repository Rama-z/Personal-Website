import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./slices/userSlice";
import authSlices from "./slices/authSlices";

import logger from "redux-logger";

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  user: userSlice.reducer,
  auth: authSlices.reducer,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: [
          "payload.headers",
          "payload.config",
          "payload.request",
          "register",
          "rehydrate",
          "payload",
          "meta",
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(logger),
});

export const persister = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useDispatch: () => AppDispatch = useDispatchBase;

// export const useSelector = <TSelected = unknown>(
//   selector: (state: RootState) => TSelected
// ): TSelected => useSelectorBase<RootState, TSelected>(selector);
