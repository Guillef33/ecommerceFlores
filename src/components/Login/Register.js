import React, { useState, useContext } from "react";

import "./Login.css";

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

function Register() {
  // const { error, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword, register, logout } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [error, setError] = useState("" );
  const navigate = useNavigate();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const logout = async () => {
    await signOut(auth);
  };

  const register = async () => {
    setError("");
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      swal({
        title: "Te registraste con exito",
        text: "Gracias por sumarte. Ahora te redirigeremos a la pagina del checkout",
        icon: "sucess",
        button: "Ir a comprar",
      });
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="login-page">
      <Paper className="checkout-section">
        <section>
          <Typography p={2} variant="h4" component="h5">
            Registrate como nuevo usuario
          </Typography>
          {error ? (
            <Typography className="error-message" p={2}>
              {error}
            </Typography>
          ) : (
            ""
          )}

          <Box className="form-container">
            <TextField
              onChange={(e) => {
                setRegisterEmail(e.target.value);
              }}
              name="email"
              label={"Email"}
              className="text-field-checkout"
            />

            <TextField
              onChange={(e) => {
                setRegisterPassword(e.target.value);
              }}
              name="password"
              label={"Password"}
              className="text-field-checkout"
              type="password"
            />
            <Button variant="contained" onClick={register}>
              Registrate Ahora
            </Button>
          </Box>
        </section>
      </Paper>
    </div>
  );
}

export default Register;
