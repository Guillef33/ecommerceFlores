import React, { useState, useContext } from "react";

import Box from "@mui/material/Box";
import { Button, TextField, Paper, Typography } from "@mui/material";

import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";

import "./Checkout.css";

import { db } from "../../pages/firebase/config";

import swal from "sweetalert";

import { CartContext } from "../../context/CartContext";

import MessageSuccess from "../Messages/MessageSucess";
const initialState = {
  //   buyer: { name: "", phone: "", email: "" },
  //   items: [{ id, title, price}], date, total
  nombre: "",
  apellido: "",
  email: "",
};

function Checkout() {
  const { cart } = useContext(CartContext);

  const [purchaseId, setPurchaseId] = useState(false);

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const docRef = await addDoc(collection(db, "purchases"), {
      cart,
      values,
      // id: "",
      // title: "",
      // price: "",
      // date: "",
      // total: "",
    });

    setValues(initialState);
    setPurchaseId(docRef.id);
  };

  return (
    <div className="checkout-page">
      <Paper className="checkout-section">
        <Typography p={2} variant="h4" component="h5">
          Ingresa tus datos para hacerte llegar el producto{" "}
        </Typography>
        <Box className="form-container">
          <TextField
            onChange={onChange}
            name="nombre"
            label={"Nombre"}
            className="text-field-checkout"
          />
          <TextField
            onChange={onChange}
            name="apellido"
            label={"Apellido"}
            className="text-field-checkout"
          />
          <TextField
            onChange={onChange}
            name="email"
            label={"Email"}
            className="text-field-checkout"
          />

          <Button
            variant="contained"
            onClick={(e) => {
              onSubmit(e);
              swal({
                title: "Has comprado el producto",
                text: "Anota el ID para hacer el seguimiento de tu envio",
                icon: "sucess",
                button: "Ver mas",
              });
            }}
          >
            Finalizar Compra
          </Button>
          {purchaseId && <MessageSuccess purchaseId={purchaseId} />}
        </Box>
      </Paper>
    </div>
  );
}

export default Checkout;
