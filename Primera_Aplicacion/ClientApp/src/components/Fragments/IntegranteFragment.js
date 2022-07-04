//Importar React
import React, { useEffect, useState } from 'react'

//Componente perfil(declarando en forma de funcion ES6) 
const IntegranteFragment = ({imagen, titulo, descripcion}) => {
    return (
        <>
            <div class="card">
                <img src={imagen} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descripcion}</p>
                </div>
            </div>
        </>


    )
}
export default IntegranteFragment