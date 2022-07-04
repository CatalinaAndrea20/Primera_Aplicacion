//Importar React
import React, { useEffect, useState } from 'react'

//Componente perfil(declarando en forma de funcion ES6) 
const Login = () => {
    //Variables de estado
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [recordar, setRecordar] = useState(false)

    //Funciones
    const handleClickRecordarme = (evento) => {
        setRecordar(!recordar)
    }

    const handleUsuario = (evento) => {
        setUsuario(evento.target.value)
    }
    const handlePassword = (evento) => {
        setPassword(evento.target.value)
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {/*input de usuario*/}
                    <label htmlfor="usuario">Usuario</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >@</span>
                        <input id="usuario" value={usuario} onChange={handleUsuario} type="text" className="form-control" placeholder="Ingrese su usuario"/>
                    </div>

                    {/*input de password*/}
                    <label htmlfor="password">Contraseña</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" >#</span>
                        <input id="password" value={password} onChange={handlePassword} type="text" className="form-control" placeholder="Ingrese su contraseña" />
                    </div>

                    {/*input de recordarme*/}
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="recordar" checked={recordar} onClick={handleClickRecordarme} />
                            <label className="form-check-label" htmlfor="flexCheckDefault">
                                Recordarme
                            </label>
                    </div>
                    {/*boton*/}
                    <button type="button" className="btn btn-primary">Iniciar Sesion</button>

                </div>
            </div>
        </>


    )
}
export default Login