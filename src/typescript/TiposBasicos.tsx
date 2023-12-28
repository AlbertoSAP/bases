import React from "react";

export const TiposBasicos = () => {

  const name:string  = "Alberto"
  const age:number = 26
  const isActivated:boolean = true

  const powers:string[] = ['velocidad','volar','Respirar en el agua']

  return (
    <div>
      <h3>Tipos Basicos</h3>
      <div>{name}, {age}, {isActivated ? 'activo':'inactivo'}</div>
      <br />
      {
       powers.join(', ')
      }
    </div>
  );
};
