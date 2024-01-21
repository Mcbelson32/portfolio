import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    theme: counterReducer,
  },
});

export default store;
