import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "./features/stationSlice";
import newsReducer from "./features/newSlice";

const store = configureStore({
  reducer: {
    station: stationReducer,
    news: newsReducer,
  },
});

export default store;
