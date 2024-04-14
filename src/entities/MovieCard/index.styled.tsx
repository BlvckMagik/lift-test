"use client";

import { styled } from "@mui/system";
import Image from "next/image";

export const Container = styled((props: any) => <div {...props} />)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    alignSelf: "flex-start",

    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
  })
);

export const MovieImage = styled((props: any) => <Image {...props} />)(
  ({ theme }) => ({
    width: "304px",
    height: "450px",
    boxShadow: "0px 8px 17px 0px #0000000D",
    borderRadius: "16px",
    objectFit: "cover",
    objectPosition: "center",

    [theme.breakpoints.down("sm")]: {
      // gap: "24px",
    },
  })
);

export const Info = styled((props: any) => <div {...props} />)(({ theme }) => ({
  gap: "8px",
  display: "flex",
  flexDirection: "column",
  color: theme.palette.secondary.contrastText,

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
  },
}));

export const Title = styled((props: any) => <div {...props} />)(
  ({ theme }) => ({
    fontSize: "32px",
    maxWidth: "304px",
    fontWeight: 900,
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      gap: "24px",
    },
  })
);

export const Year = styled((props: any) => <div {...props} />)(({ theme }) => ({
  fontSize: "16px",
  maxWidth: "304px",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    gap: "24px",
  },
}));
