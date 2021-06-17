import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Contex from '../../store/Contex'

const RoutesPrivate = ({ component: Component, ...rest}) => {

    const { token } = useContext(Contex)
    
    return(
        <Route
            {...rest}
            render={() => token
                ? <Component {...rest} />
                : <Redirect to="/login" />
            }
        />
    )
}

export default RoutesPrivate