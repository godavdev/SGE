import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const { loading, user, logOut } = useAuth()

    const navigate = useNavigate()

    if (loading) return <div>Cargando...</div>

    const handleLogOut = async () => {
        await logOut()
        navigate("/login")
    }

    return (
        <div>
            {user.email}
            <button onClick={handleLogOut}>Cerrar sesion</button>
        </div>
    )
}

export default Dashboard