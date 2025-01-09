import React, { useState, useContext } from "react";
import { Divider, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginBanner from "../../assets/loginBanner.svg";
import styles from "./style.module.css";
import UserNameIcon from "../../assets/icons/usernameIcon.svg";
import PasswordIcon from "../../assets/icons/passwordIcon.svg";
import EmailIcon from "../../assets/icons/mailIcon.svg";
import GoogleLogo from "../../assets/icons/googleLogo.svg";
import FacebookLogo from "../../assets/icons/facebookLogo.svg";
import StyledButton from "../../components/StyledButton";
import LoginLogoutButton from "../../components/LoginLogoutButton";
import CustomInput from "../../components/CustomInput";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);
  const { login } = useContext(AuthContext);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const navigate = useNavigate();

  const validateInputs = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (!formData.username) {
      errors.username = "Username is required";
    } else if (formData.username !== "emilys") {
      errors.username = "Username must be 'emilys'";
    }

    return errors;
  };

  const handleLogin = async () => {
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    try {
      setError({});
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          expiresInMins: 30,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        login({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          expiresInMins: 30,
        });

        navigate("/home");
      } else {
        alert(data.message || "Login failed");
        alert(
          "The api provided in the pdf is not working\nHence the login will still occur as the data is being stored statically in the localstorage"
        );
        login({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          expiresInMins: 30,
        });

        navigate("/home");
      }
    } catch (err) {
      alert("Error logging in");
    }
  };

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={styles.pageWrapper}
    >
      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        container
        justifyContent={{ sm: "flex-start", md: "flex-start", xs: "center" }}
      >
        <img
          src={LoginBanner}
          alt="login-banner"
          className={styles.loginBannerImg}
        />
      </Grid>
      <Grid item xs={12} md={6} sm={6} className={styles.formContainer}>
        <p className={styles.welcomeTxt}>Welcome to</p>
        <p className={styles.unstopTxt}>Unstop</p>

        <StyledButton text="Login with Google" logo={GoogleLogo} />

        <StyledButton text="Login with Facebook" logo={FacebookLogo} />
        <Divider
          sx={{
            "&::before, &::after": { borderColor: "#BFBFBF" },
            py: 2,
          }}
        >
          OR
        </Divider>
        <CustomInput
          label="User Name"
          icon={UserNameIcon}
          value={formData.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          error={error.username}
          helperText={error.username}
        />
        <CustomInput
          label="Email"
          icon={EmailIcon}
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          error={error.email}
          helperText={error.email}
        />
        <CustomInput
          label="Password"
          icon={PasswordIcon}
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          error={error.password}
          helperText={error.password}
          type="password"
          showPasswordToggle={true}
        />

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
              }
              label="Remember me"
              sx={{
                "& .MuiTypography-root": {
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: 400,
                },
              }}
            />
          </Grid>
          <Grid item>
            <Link
              to="/"
              className={styles.forgotOrRegisterTxt}
              style={{ textDecoration: "none" }}
            >
              Forgot Password?
            </Link>
          </Grid>
        </Grid>
        <LoginLogoutButton text="Login" onClick={handleLogin} />
        <Grid container justifyContent="center" pt={2}>
          <span className={styles.noAccountTxt}>Don't have an account? </span>
          <Link
            to="/"
            className={styles.forgotOrRegisterTxt}
            style={{ textDecoration: "none" }}
          >
            Register
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
