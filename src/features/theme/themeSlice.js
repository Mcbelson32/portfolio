import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (action.payload !== undefined) {
        state.isDark = action.payload;
      } else {
        state.isDark = !state.isDark;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
