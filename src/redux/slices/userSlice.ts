import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../../utils/api";

export interface UserState {
  email: object;
  name: string;
}

const initialState = {
  name: "",
  email: {},
  youtube: "",
} as UserState;

const getUserHistoryThunk = createAsyncThunk(
  "user/getHistory",
  async (token: string) => {
    const response = await getHistory(token);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setName: (
    //   state: Draft<typeof initialState>,
    //   action: PayloadAction<typeof initialState.name>
    // ) => {
    //   state.name = action.payload;
    // },
    // setEmail: (state, action) => {
    //   state.email = action.payload;
    // },
  },
  extraReducers(builder) {
    builder.addCase(getUserHistoryThunk.fulfilled, (state, action) => {
      // console.log(action.payload.data);
      // console.log(action.meta);
      // console.log(action.type);
    });
    builder.addCase(getUserHistoryThunk.rejected, (state, action) => {
      console.log(action.error);
      console.log(action.payload);
    });
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

// Export all action
export const userAction = { ...userSlice.actions, getUserHistoryThunk };
export default userSlice;
