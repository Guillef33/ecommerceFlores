import React, { useState, createContext } from "react";

import swal from "sweetalert";

import { auth } from "../pages/firebase/config";

import { Link, useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     navigate("/");
  //     console.log(user);
  //     swal({
  //       title: `Bienvenido de vuelta, ${loginEmail}`,
  //       text: "Ya estas logeado y podes seguir viendo la web",
  //       icon: "sucess",
  //       button: "Navegar",
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

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
    <AuthContext.Provider
      value={{
        user,
        setUser,
        auth,
        error,
        setError,
        // login,
        logout,
        navigate,
        // loginEmail,
        // setLoginEmail,
        // loginPassword,
        // setLoginPassword,
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        register,
        onAuthStateChanged,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
