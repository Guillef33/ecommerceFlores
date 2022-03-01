import React from 'react'

import { Navigate } from 'react-router-dom'

import { AuthContext } from "../../context/AuthContext";

function ProtectedRoute( { children } ) {

  //   let { user } = AuthContext;

  //   if (!user) {
  //     return <Navigate to="/" />;
  //   }


  // return { children };
}

export default ProtectedRoute