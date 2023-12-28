import React, { useState } from "react";
import { useCounter } from "../Hook/useCounter";

export const ContadorHook = () => {
 
  const {count,acumular,restar} = useCounter(10)
  const disabled = count === 0
  return (
    <>
      <h3>
        Contador Hook <small>{count}</small>
      </h3>

      <button className="mx-2 btn btn btn-success" onClick={() => acumular(1)}>
        +1
      </button>
      <button className={disabled ?  "mx-2 btn btn-secondary" : "mx-2 btn btn-warning"} 
      onClick={() => restar(1)}
      disabled={disabled}
      >
        -1
      </button>
    </>
  );
};
