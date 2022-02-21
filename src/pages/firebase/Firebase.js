import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../context/AppContext";
import { collection, query, where, getDocs } from "firebase/firestore";

// Firebase - Firestore
import { db } from "./config";

function Firebase() {
  //   const { firebaseProducts, setFirebaseProducts } = useContext(AppContext);

  const [firebaseProducts, setFirebaseProducts] = useState([]);

  useEffect(() => {
    const getJuegos = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      //   console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      //   console.log(docs)
      setFirebaseProducts(docs);
    };
    getJuegos();
  }, []);

  return (
    <div>
      {firebaseProducts.map((juego) => {
        return (
          <>
            <h2>{juego.title}</h2>
            <img
              src={juego.imageId}
              alt="imagen que viene de firebase"
              key={juego.id}
            />
            ;
          </>
        );
      })}
    </div>
  );
}

export default Firebase;
