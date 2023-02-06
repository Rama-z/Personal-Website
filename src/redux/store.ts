import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authSlices from "./slices/authSlices";
import logger from "redux-logger";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";

const persistConfig = {
  key: "private-web",
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
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export const persister = persistStore(store);
export default store;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
