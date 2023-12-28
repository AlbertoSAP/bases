import React from 'react'

export const Funciones = () => {

    const sumar = (a:number,b:number):number => a+b

  return (
    <>
      <h3>Funciones</h3>
      <span> el resultado es {sumar(10,5)} </span>
    </>
  )
}
