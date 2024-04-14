"use client";
import {
  FormControlLabel as MUIFormControlLabel,
  Radio as MUIRadio,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/system";

export const Container = styled((props: any) => <div {...props} />)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",

    "& img": {
      height: "135px",
      width: "135px",
    },

    "& div": {
      fontSize: "32px",
      fontWeight: 900,
      lineHeight: "30px",
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },

    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
  })
);
