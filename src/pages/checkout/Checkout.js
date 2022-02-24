import React, { useState, useContext } from "react";

import { collection, query, where, getDocs } from "firebase/firestore";
import { addDoc } from "@firebase/firestore";

import { db } from "../firebase/config";

import { CartContext } from "../../context/CartContext";

import MessageSuccess from "../../components/Messages/MessageSucess";
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
    // console.log(value)
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    const docRef = await addDoc(collection(db, "purchases"), {
      cart,
      values,
      id: "",
      title: "",
      price: "",
      date: "",
      total: "",
    });

    // console.log('Docuemnt writter with ID: ', docRef.id);

    setValues(initialState);
    setPurchaseId(docRef.id);
  };

  return (
    <div>
      <h2>Ingrese sus datos para comprar</h2>
      <form className="form-container" onSubmit={onSubmit}>
        <label>
          Nombre
          <input
            type="text"
            placeholder="Tu nombre"
            name="nombre"
            className="input-checkout"
            value={values.name}
            onChange={onChange}
          />
        </label>

        <label>
          Apellido
          <input
            type="text"
            placeholder="Tu apellido"
            name="apellido"
            className="input-checkout"
            value={values.apellido}
            onChange={onChange}
          />
        </label>

        <label>
          Email
          <input
            type="text"
            placeholder="Tu email"
            name="email"
            className="input-checkout"
            value={values.email}
            onChange={onChange}
          />
        </label>

        <button>Comprar</button>
      </form>

      {purchaseId && <MessageSuccess purchaseId={purchaseId} />}
    </div>
  );
}

export default Checkout;
