import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  sitecoredata: any;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: IInitialState = {
  sitecoredata: [],
  loading: false,
  error: null,
};

// fn to fetch initial form structure data
export const fetchSitecoredata = createAsyncThunk<any>(
  "data/fetchSitecoredata",
  async (): Promise<any> => {
    const response = await fetch("/");
    const data = await response.json();
    return data;
  }
);

const dataslice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSitecoredata.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSitecoredata.fulfilled, (state, action) => {
        state.loading = false;
        state.sitecoredata = action.payload;
      })
      .addCase(fetchSitecoredata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataslice;
