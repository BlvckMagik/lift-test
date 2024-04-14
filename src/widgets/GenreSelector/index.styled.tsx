"use client";
import {
  FormControl as MUIFormControl,
  RadioGroup as MUIRadioGroup,
  FormLabel as MUIFormLabel,
  Button as MUIButton,
} from "@mui/material";
import { styled } from "@mui/system";

export const FormControl = styled(MUIFormControl)(({ theme }) => ({
  gap: "40px",

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
  },
}));

export const RadioGroup = styled(MUIRadioGroup)(({ theme }) => ({
  gap: "24px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    gap: "16px",
  },
}));

export const FormLabel = styled(MUIFormLabel)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 900,
  lineHeight: "30px",
  color: `${theme.palette.secondary.contrastText} !important`,

  [theme.breakpoints.down("sm")]: {
    marginBottom: "16px",
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  width: "528px",
  height: "56px",
  color: theme.palette.secondary.main,
  borderRadius: "8px",
  marginTop: "80px",

  "& .Mui-disabled": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "0px",
  },
}));
