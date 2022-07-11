//Importar React
import React, { useEffect, useState } from 'react'

//Componente perfil(declarando en forma de funcion ES6) 
const IntegranteFragment = ({imagen, titulo, descripcion}) => {
    return (
        <>
            <div className="card">
                <img src={imagen} class="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
            </div>
        </>


    )
}
export default IntegranteFragment