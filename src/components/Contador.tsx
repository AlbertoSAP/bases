import React, { useState } from "react";

export const Contador = () => {
  const [count, setCount] = useState<number>(0);

  const acumular = (value: number) => setCount(count + value);
  const restar = (value: number) => {
    setCount(count - value);
  };

  return (
    <>
      <h3>
        Contador <small>{count}</small>
      </h3>

      <button className="mx-2 btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      <button className="mx-2 btn btn-primary" 
      onClick={() => restar(1)}
      disabled={count === 0}
      >
        -1
      </button>
    </>
  );
};
