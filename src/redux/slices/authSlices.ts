import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authLogin } from "src/utils/api";
interface Auth {
  id: number;
  email: string;
  token: string;
  status: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export const initialState = {
  id: 0,
  email: "",
  token: "",
  status: "",
} as Auth;

const authLoginThunk = createAsyncThunk(
  "auth/login",
  async (body: LoginParams) => {
    console.log(body);
    const response = await authLogin(body);
    return response;
  }
);

export const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    profile: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(authLoginThunk.pending, (state, action) => {
      state.status =
        action.type === "auth/login/pending" ? "pending" : action.type;
    });
    builder.addCase(authLoginThunk.rejected, (state, action) => {
      state.email = initialState.email;
      state.id = initialState.id;
      state.status = initialState.status;
      state.token = initialState.token;
      console.log(state);
      // state.status = action.type;
      console.log(action);
    });
    builder.addCase(authLoginThunk.fulfilled, (state, action) => {
      // console.log(state);
      state.id = action.payload.data.result.payload.id;
      state.email = action.payload.data.result.payload.email;
      state.token = action.payload.data.result.token;
      state.status = action.type;
    });
  },
});

export const getAuthState = (state: { auth: Auth }) => state.auth;

export const authAction = {
  ...authSlices.actions,
  authLoginThunk,
};

export default authSlices;
