import React, { useEffect, useReducer } from "react";
import authReducer from "../Hook/authReducer";

const initialState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2000);
  }, []);

  const spinnerWithAllColor = () => {
    const bootstrapColor = [
      "primary",
      "success",
      "danger",
      "warning",
      "info",
      "secondary",
    ];
    return bootstrapColor.map((color) => {
      return (
        <div className={`spinner-grow text-${color}`} role="status">
          <span className="sr-only"></span>
        </div>
      );
    });
  };

  if (validando) {
    return (
      <div className="row justify-content-center align-content-center vh-100">
        {spinnerWithAllColor()}
        <span className=" mt-1 text-center">Validando.....</span>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-center">Login</h3>

      {token ? (
        <div className="alert alert-success text-center">
          Autenticado como: {name}
        </div>
      ) : (
        <div className="alert alert-danger text-center">No Autorizado</div>
      )}

      {!token ? (
        <button className="btn btn-primary">Login</button>
      ) : (
        <button className="btn btn-danger">Logout</button>
      )}
    </>
  );
};
