import React, {useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import api from "../../api/api"


export default function useAuth(){
  const history = useHistory()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const token = localStorage.getItem('@CMDM:token')

      if (token) {
          api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
          setAuthenticated(true)
      }

      setLoading(false)
  }, [])

  async function handleLogin(user) {
      await api.post("/login", {
          username: user.username,
          password: user.password
      }).then((response) => {
          const token = response.data.access_token
          localStorage.setItem('@CMDM:token', JSON.stringify(token))
          api.defaults.headers.Authorization = `Bearer ${token}`
          history.push("/home")
          setAuthenticated(true)
      }).catch((response) => {
          console.log(response);
      })
  }

  function handleLogout() {
      setAuthenticated(false)
      localStorage.removeItem('@CMDM:token')
      api.defaults.headers.Authorization = undefined
      history.push("/login")
  }

  return {authenticated, loading, handleLogin, handleLogout};
}