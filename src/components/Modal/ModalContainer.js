import React, { useContext } from "react";

import "./modal.css";

import Modal from "./Modal";
import { AppContext } from "../../context/AppContext";

function ModalContainer() {
  const { showModal, setShowModal } = useContext(AppContext);

  console.log(showModal);

  return (
    <div>
      <Modal />{" "}
    </div>
  );
}

export default ModalContainer;
