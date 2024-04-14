"use client";
import {
  FormControl as MUIFormControl,
  TextField as MUITextField,
  FormLabel as MUIFormLabel,
  Button as MUIButton,
} from "@mui/material";
import { styled } from "@mui/system";

export const FormControl = styled(MUIFormControl)(({ theme }) => ({
  gap: "40px",

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
    width: "70vw",
  },
}));

export const TextField = styled(MUITextField)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,

  "& .MuiInputBase-root": {
    color: theme.palette.secondary.contrastText,
    fontSize: "16px",
    lineHeight: "21.79px",

    "& input:focus": {
      border: "none",
    },
  },

  [theme.breakpoints.down("sm")]: {},
}));

export const FormLabel = styled(MUIFormLabel)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 900,
  lineHeight: "30px",
  color: theme.palette.secondary.contrastText,

  [theme.breakpoints.down("sm")]: {
    marginBottom: "16px",
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  width: "528px",
  height: "56px",
  color: theme.palette.secondary.main,
  borderRadius: "8px",

  "& .Mui-disabled": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "0px",
  },
}));
