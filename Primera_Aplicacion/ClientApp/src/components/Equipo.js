//Importar React
import React, { useEffect, useState } from 'react'
//import icono2 from '../asset/images/icono1.png'
import IntegranteFragment from './Fragments/IntegranteFragment'


//Componente perfil(declarando en forma de funcion ES6) 
const Equipo = () => {
    return (
        <>
            <h1>¿Quienes Somos</h1>
            <div className="row">
                <div className="col-3">
                    <IntegranteFragment
                        imagen="https://image.shutterstock.com/image-vector/cross-stitch-lotus-on-isolated-260nw-567470845.jpg"
                        titulo={'Flor'}
                        descripcion="Flor rosita"
                    />
                </div>
                <div className="col-3">
                    <IntegranteFragment
                        imagen="https://www.satvix.com/wp-content/uploads/2016/05/PostgreSQL_logo.3colors.120x120.png"
                        titulo={'Elefante'}
                        descripcion="Elefante azul"
                    />
                </div>
                <div className="col-3">
                    <IntegranteFragment
                        imagen="https://www.fundaciontelefonica.co/wp-content/uploads/2020/11/icon-habilidad-120x120-1-120x120.png"
                        titulo={'Pagina'}
                        descripcion="Pagina HTML"
                    />

                </div>
            </div>
            
        </>

    )
}

export default Equipo