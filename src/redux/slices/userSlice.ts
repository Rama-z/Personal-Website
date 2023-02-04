import {
  createSlice,
  Draft,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getHistory } from "../../utils/api";

export interface UserState {
  email: object;
  name: string;
}

const getUserHistory = createAsyncThunk("user/getHistory", async () => {
  const response = await getHistory();
  return response;
});

const initialState = {
  name: "",
  email: {},
  youtube: "",
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserHistory.fulfilled, (state, action) => {
      state.email = action.payload.data.result.result[0];
    });
    builder.addCase(getUserHistory.rejected, (state, action) => {
      console.log(action.error);
      console.log(action.payload);
    });
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

// Export all action
export const userAction = { ...userSlice.actions, getUserHistory };
export default userSlice.reducer;
