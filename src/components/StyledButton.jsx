import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
  padding: "21px",
  borderRadius: "16px",
  border: "1px solid #e2e2e2",
  boxShadow: "0px 4px 14px 0px #0000000d",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Poppins, sans-serif",
  color: "#1c1b1f",
  marginTop: 8,

  [theme.breakpoints.down("sm")]: {
    padding: "16px",
    fontSize: "12px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "18px",
    fontSize: "14px",
  },
}));

const StyledButton = ({ text, logo }) => {
  return (
    <CustomButton
      variant="outlined"
      fullWidth
      startIcon={
        <img
          src={logo}
          alt="Button Logo"
          style={{ width: "20px", height: "20px" }}
        />
      }
    >
      {text}
    </CustomButton>
  );
};

export default StyledButton;
