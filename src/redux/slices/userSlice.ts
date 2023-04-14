import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHistory } from "../../utils/api";

export interface UserState {
  email: object;
  name: string;
  history: History;
}

interface History {
  id: number;
  userId: number;
  total: number;
  date: string;
  updated_at: string;
  productId: number;
}

const initialState = {
  name: "",
  email: {},
  youtube: "",
  history: {
    id: 0,
    userId: 0,
    total: 0,
    date: "string",
    updated_at: "string",
    productId: 0,
  },
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
    builder.addCase(getUserHistoryThunk.pending, (state, action) => {
      console.log("Loading");
    });
    builder.addCase(getUserHistoryThunk.rejected, (state, action) => {
      console.log("Error");
    });
    builder.addCase(getUserHistoryThunk.fulfilled, (state, action) => {
      state.history = action.payload.data.result.result;
    });
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

// Export all action
export const userAction = { ...userSlice.actions, getUserHistoryThunk };
export default userSlice;
