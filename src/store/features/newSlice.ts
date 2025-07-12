import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentNewsTitle: "Prothom Alo",
  currentExternalURL: "https://www.prothomalo.com/",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getCurrentNews: (state) => {
      return state;
    },
    setCurrentNews: (state, action) => {
      state.currentNewsTitle = action.payload.title;
      state.currentExternalURL = action.payload.externalurl;
    },
  },
});
export const { getCurrentNews, setCurrentNews } = newsSlice.actions;
export default newsSlice.reducer;
