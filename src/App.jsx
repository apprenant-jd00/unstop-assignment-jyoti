import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useContext } from "react";
import LoginPage from "./containers/LoginPage";
import MainPage from "./containers/MainPage";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />

          {/* Login Page */}
          <Route
            path="/auth/login"
            element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
          />

          {/* Main Page */}
          <Route
            path="/home"
            element={
              isAuthenticated ? <MainPage /> : <Navigate to="/auth/login" />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
