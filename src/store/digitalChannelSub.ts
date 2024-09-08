import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface digitalChannelSubState {

}

const initialState = {
    loading : false,
    error : null,
    digitalSubChanneldata : null 
}

export const digitalChannelSubSlice = createSlice({
    name : 'digitalChannelSub',
    initialState,
    reducers:{
        setDigitalChannelSliceField : (state : any, action: PayloadAction<{fiieldName: keyof digitalChannelSubState | any, value: any}>) => {
            const {fiieldName,value} = action.payload
            state[fiieldName] = value
        },
        
    },
    extraReducers: (builder) => {}
})

export const {setDigitalChannelSliceField} = digitalChannelSubSlice.actions;

export default digitalChannelSubSlice.reducer;

