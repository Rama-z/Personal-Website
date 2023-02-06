import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authLogin } from "src/utils/api";

interface Auth {
  id: number;
  email: string;
  token: string;
}

const initialState = {
  id: 0,
  email: "",
  token: "",
} as Auth;

const authLoginThunk = createAsyncThunk("auth/login", async (body: object) => {
  const response = await authLogin(body);
  return response;
});

export const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authLoginThunk.fulfilled, (state, action) => {
      state.id = action.payload.data.result.payload.id;
      state.email = action.payload.data.result.payload.email;
      state.token = action.payload.data.result.token;
    });
    builder.addCase(authLoginThunk.rejected, (state, action) => {
      console.log(action.error);
    });
  },
});

export const getAuthState = (state: { auth: Auth }) => state.auth;

export const authAction = {
  ...authSlices.actions,
  authLoginThunk,
};

export default authSlices;
