import React, { createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../api/api'

const Context = createContext()

function AuthProvider({ children }) {
    const history = useHistory()
    const [authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }

        setLoading(false)
    }, [])

    async function handleLogin() {
        await api.post("/login", {
            username: "lucas",
            password: "password"
        }).then((response) => {
            const token = response.headers.authorization
            localStorage.setItem('token', JSON.stringify(token))
            api.defaults.headers.Authorization = `Bearer ${token}`
            history.push("/home")
            setAuthenticated(true)
        })
    }

    function handleLogout() {
        setAuthenticated(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        history.push("/login")
    }

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AuthProvider }