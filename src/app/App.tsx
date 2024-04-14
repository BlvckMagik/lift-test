"use client";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";

import CustomTabPanel from "@/entities/CustomTabPanel";
import Header from "@/widgets/Header";
import MovieSelector from "@/widgets/MovieSelector";
import { RootState } from "@/shared/store";
import MovieViewer from "@/widgets/MovieViewer";
import { Alert, Snackbar } from "@mui/material";
import { setSnackbarInfo } from "@/shared/store/slice";

const GenreSelector = dynamic(() => import("@/widgets/GenreSelector"), {
  ssr: false,
});

export const App = () => {
  const pageIndex = useSelector((state: RootState) => state.slice.pageIndex);
  const { open, severity, message } = useSelector(
    (state: RootState) => state.slice.snackbarInfo
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSnackbarInfo({ open: false, severity, message }));
  };

  return (
    <>
      <Header />
      <CustomTabPanel curPageIndex={pageIndex} index={0}>
        <GenreSelector />
      </CustomTabPanel>
      <CustomTabPanel curPageIndex={pageIndex} index={1}>
        <MovieSelector />
      </CustomTabPanel>
      <CustomTabPanel curPageIndex={pageIndex} index={2}>
        <MovieViewer />
      </CustomTabPanel>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
