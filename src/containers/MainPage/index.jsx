import { Box } from "@mui/material";
import React, { useContext } from "react";
import styles from "./style.module.css";
import DummyImage from "../../assets/dummyImage.png";
import LoginLogoutButton from "../../components/LoginLogoutButton";
import { AuthContext } from "../../context/AuthContext";

const MainPage = () => {
  const { logout } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const email = userData ? userData.email : null;
  const handleLogout = () => {
    logout();
  };

  return (
    <Box
      sx={{
        mx: "auto",
        mt: 10,
        textAlign: "center",
      }}
    >
      <p className={styles.welcomeTxt}>Welcome to</p>
      <p className={styles.unstopTxt}>Unstop</p>

      <Box
        className={styles.card}
        sx={{
          mx: "auto",
        }}
      >
        <img src={DummyImage} alt="" className={styles.profileImg} />
        <p className={styles.nameTxt}>Michael Dam</p>
        <p className={styles.emailGenderTxt}>{email}</p>
        <p className={styles.emailGenderTxt}>Female</p>

        <LoginLogoutButton text="Logout" onClick={handleLogout} />
      </Box>
    </Box>
  );
};

export default MainPage;
