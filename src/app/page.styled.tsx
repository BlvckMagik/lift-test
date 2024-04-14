"use client";
import { styled } from "@mui/system";

export const Page = styled("section")(({ theme }) => ({
  fontFamily: '"Noto Sans", sans-serif',
  minHeight: "100vh",
  minWidth: "100vw",
  backgroundSize: "cover",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "136px 0 80px 0",

  [theme.breakpoints.down("sm")]: {
    padding: "100px 40px 20px 40px",
  },
}));
