import React, { useState, useContext } from "react";

import Box from "@mui/material/Box";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";

import swal from "sweetalert";

import { auth } from "../../pages/firebase/config";
import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("/");
      swal({
        title: `Bienvenido de vuelta, ${loginEmail}`,
        text: "Ya estas logeado y podes seguir viendo la web",
        icon: "sucess",
        button: "Navegar",
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <Paper className="checkout-section">
        <section>
          <Typography p={2} variant="h4" component="h5">
            Logeate para seguir comprando
          </Typography>
          {error ? (
            <p className="error-message" p={2}>
              {error}
            </p>
          ) : (
            " "
          )}
          <Box className="form-container">
            <TextField
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
              name="email"
              label={"email"}
              className="text-field-checkout"
            />
            <TextField
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              name="password"
              label={"Password"}
              className="text-field-checkout"
              type="password"
            />
            <Button variant="contained" onClick={login}>
              Iniciar Sesion
            </Button>
            <p>
              Not have an account <Link to="/register"> Sign Up</Link>
            </p>
          </Box>
        </section>
      </Paper>
    </div>
  );
}

export default Login;
