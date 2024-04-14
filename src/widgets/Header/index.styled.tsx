"use client";
import { LinearProgress as MUILinearProgress, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderContainer = styled("header")(({ theme }) => ({
  position: "absolute",
  top: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "700px",
  width: "100%",
  height: "87px",
  background: `url("assets/header-bg.png")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",

  [theme.breakpoints.down("md")]: {},

  [theme.breakpoints.down("sm")]: {},
}));

export const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  maxWidth: "528px",
  width: "100%",
  height: "20px",
  justifyContent: "space-between",
  margin: "16px 36px 14px 0",

  [theme.breakpoints.down("sm")]: {
    margin: "16px 0 14px 0",
    padding: "0 35px",
  },
}));

export const IconContainer = styled((props: any) => <div {...props} />)(
  ({ theme }) => ({
    flexGrow: 2,
    textAlign: "left",
    height: "20px",
  })
);

export const Progress = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "19.07px",
  textAlign: "right",
  marginRight: "24px",
}));

export const LinearProgress = styled(MUILinearProgress)(({ theme }) => ({
  width: "515px",
  marginRight: "27px",

  "& .MuiLinearProgress-bar2Buffer": {
    backgroundColor: "#fff",
    borderRadius: "4px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "80%",
    margin: 0,
  },
}));
