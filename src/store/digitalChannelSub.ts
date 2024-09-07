import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface digitalChannelSubState {

}

const initialState = {
    loading : false,
    error : null,
}

export const digitalChannelSubSlice = createSlice({
    name : 'digitalChannelSub',
    initialState,
    reducers:{
        setField : (state : any, action: PayloadAction<{fiieldName: keyof digitalChannelSubState, value: any}>) => {
            state[action.payload.fiieldName] = action.payload.value
        }
    },
    extraReducers: (builder) => {}
})

export const {setField} = digitalChannelSubSlice.actions;

export default digitalChannelSubSlice.reducer;

