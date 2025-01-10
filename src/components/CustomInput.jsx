import React, { useState } from "react";
import { TextField, Button, InputAdornment, Grid } from "@mui/material";
import Visibility from "../assets/icons/visibility.svg";
import { styled } from "@mui/material/styles";

const StyledInputBox = styled(Grid)(({ theme }) => ({
  borderRadius: "16px",
  background: "#f4f4f4",
  padding: "12px 16px",

  [theme.breakpoints.down("sm")]: {
    padding: "6px 16px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "6px 16px",
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  paddingTop: 16,
  paddingRight: 4,
  [theme.breakpoints.down("sm")]: {
    width: "20px",
    height: "20px",
  },
}));

const CustomInput = ({
  label,
  icon,
  value,
  onChange,
  error,
  helperText,
  type = "text",
  showPasswordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledInputBox container alignItems="center" mb={1}>
      <Grid item xs={1.5} md={1} sm={1.5}>
        <StyledImg src={icon} alt={`${label} icon`} />
      </Grid>
      <Grid item xs={10.5} md={11} sm={10.5}>
        <TextField
          variant="standard"
          label={label}
          fullWidth
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={helperText}
          InputProps={{
            disableUnderline: true,
            endAdornment: showPasswordToggle && (
              <InputAdornment position="end">
                <Button
                  onClick={handleTogglePassword}
                  style={{ marginBottom: 10, paddingRight: 0 }}
                >
                  <StyledImg
                    src={Visibility}
                    alt="show password"
                    style={{ paddingTop: 0 }}
                  />
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputLabel-root": {
              fontFamily: "Poppins",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16.26px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              transition: "font-size 0.2s ease",
            },
            "& .MuiInputBase-input": {
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            },
          }}
          type={showPasswordToggle && showPassword ? "text" : type}
        />
      </Grid>
    </StyledInputBox>
  );
};

export default CustomInput;
