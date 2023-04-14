import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { authLogin } from "src/utils/api";
import { toast } from "react-hot-toast";
interface Auth {
  id: number;
  email: string;
  token: string;
  status: string;
  message: string;
  error: any;
}

export interface LoginParams {
  body: {
    email: string;
    password: string;
  };
  success: () => void;
  failed: () => void;
}

export type Callback = {};

export const initialState = {
  id: 0,
  email: "",
  token: "",
  status: "",
} as Auth;

const authLoginThunk = createAsyncThunk(
  "auth/login",
  async (body: LoginParams, { rejectWithValue }) => {
    try {
      const response = await authLogin(body.body);
      body.success();
      return response;
    } catch (err) {
      const error: AxiosError = err as any;
      if (!error) {
        throw error;
      }
      body.failed();
      return rejectWithValue(error.response?.data);
    }
  }
);

export const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {},
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
      state.error = action.payload;
    });
    builder.addCase(authLoginThunk.fulfilled, (state, action) => {
      state.id = action.payload.data.result.payload.id;
      state.email = action.payload.data.result.payload.email;
      state.token = action.payload.data.result.token;
      state.status = action.type;
      state.message = action.payload.data.result.message;
    });
  },
});

export const getAuthState = (state: { auth: Auth }) => state.auth;

export const authAction = {
  ...authSlices.actions,
  authLoginThunk,
};

export default authSlices;
