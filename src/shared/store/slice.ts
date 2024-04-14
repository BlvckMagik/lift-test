import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { State } from "@/shared/types/store";

const initialState: State = {
  pageIndex: 0,
  progress: 0,
  movieName: "",
  snackbarInfo: {
    open: false,
    severity: "error",
    message: "",
  },
};

export const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setPageIndex: (state, action: PayloadAction<number>) => {
      state.pageIndex = action.payload;
    },
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setMovieName: (state, action: PayloadAction<string>) => {
      state.movieName = action.payload;
    },
    setSnackbarInfo: (state, action: PayloadAction<State["snackbarInfo"]>) => {
      state.snackbarInfo = action.payload;
    },
    reset: () => initialState,
  },
});

export const {
  setPageIndex,
  setProgress,
  setMovieName,
  setSnackbarInfo,
  reset,
} = slice.actions;

export default slice.reducer;
