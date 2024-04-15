"use client";
import { Button as MUIButton } from "@mui/material";
import { styled } from "@mui/system";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "90px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 13%",
  marginBottom: "80px",

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
  },
}));

export const Button = styled(MUIButton)(({ theme }) => ({
  width: "528px",
  height: "56px",
  color: theme.palette.secondary.main,
  borderRadius: "8px",
  position: "fixed",
  bottom: "50px",

  "& .Mui-disabled": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.secondary.main,
  },

  [theme.breakpoints.down("sm")]: {
    width: "80vw",
    marginTop: "0px",
    bottom: "30px",
  },
}));
