import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  currentStationName: "Somoy",
  currentStationURL: "/tv",
  currentExternalURL: "https://youtu.be/5YLNIUlUmEU",
};

const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    getCurrentStation: (state) => {
      return current(state);
    },
    setCurrentStation: (state, action) => {
      state.currentStationName = action.payload.name;
      state.currentStationURL = action.payload.url;
      state.currentExternalURL = action.payload.externalurl;
    },
  },
});

export const { getCurrentStation, setCurrentStation } = stationSlice.actions;
export default stationSlice.reducer;
