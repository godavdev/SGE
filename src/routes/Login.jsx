import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const { logIn } = useAuth()

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(user.email, user.password)
            navigate("/")
        } catch (error) {
            throw new Error(error)
        }
    }

    const handleUserChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
        console.log(user)
    }

    return (
        <>
            {/* Insertar componente de form aqui, tiene que tener la propiedad onChange y onSubmit */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electronico:</label>
                <input type="email" name='email' id='email' placeholder='Correo electronico' onChange={handleUserChange} />
                <label htmlFor="password">Contrasena:</label>
                <input type="password" name="password" id="password" placeholder='Contrasena' onChange={handleUserChange} />
                <button type="submit">Iniciar sesion</button>
            </form>
        </>
    )
}

export default Login