import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import digitalChannelSubReducer from "./digitalChannelSub";

const rootReducer = combineReducers({
  data: dataReducer,
  digitalChannelSub: digitalChannelSubReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// infering types
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
