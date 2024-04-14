import { AlertColor, AlertPropsColorOverrides, Color } from "@mui/material";

export interface State {
  pageIndex: number;
  progress: number;
  movieName: string;
  snackbarInfo: {
    open: boolean;
    severity: AlertColor;
    message: string;
  };
}
