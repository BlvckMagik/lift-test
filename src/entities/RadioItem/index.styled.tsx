"use client";
import {
  FormControlLabel as MUIFormControlLabel,
  Radio as MUIRadio,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/system";

export const FormControlLabel = styled((props: any) => (
  <MUIFormControlLabel {...props} />
))(({ theme, checked }) => ({
  justifyContent: "space-between",
  margin: 0,
  color: theme.palette.secondary.contrastText,
  height: "64px",
  padding: "20px 40px",
  border: `${checked ? "2" : "1"}px solid ${
    checked ? theme.palette.primary.main : theme.palette.secondary.light
  }`,
  borderRadius: "8px",
  fontSize: "16px",
  lineHeight: "21.79px",
  width: "528px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "20px 24px",
  },
}));

export const LabelContainer = styled("span")(({ theme }) => ({
  display: "flex",
  gap: "16px",
  fontSize: "16px",
  lineHeight: "21.79px",

  "& span:nth-child(1)": {
    fontSize: "24px",
  },

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

export const CheckedIcon = styled(DoneIcon)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  width: "24px",
  height: "24px",
  borderRadius: "14px",
  border: `3px solid ${theme.palette.primary.main}`,
}));
