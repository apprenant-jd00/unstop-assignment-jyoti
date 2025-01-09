import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  fontFamily: "Poppins, sans-serif",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "21.68px",
  textAlign: "left",
  color: "#FFFFFF",
  width: "100%",

  padding: "20px 0px 20px 0px",
  borderRadius: "16px",
  background: "#6358DC",
  textTransform: "none",
  boxShadow: "none",
  "&:hover": {
    background: "#5147b8",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "11.68px",
    padding: "18px 0px 18px 0px",
  },

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    lineHeight: "11.68px",
    padding: "18px 0px 18px 0px",
  },
}));

const LoginLogoutButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default LoginLogoutButton;
