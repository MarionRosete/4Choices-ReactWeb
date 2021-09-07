import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoutes({  component:Component, ...rest}) {
    const isAuthenticated = localStorage.getItem('token');
    
    return (
        <Route {...rest} render={(props) => {
            if(isAuthenticated!=null){
                return <Component/>
            }else{
                return <Redirect to={{pathname: '/', state:{from: props.location}}}/>
            }
        }}/>
    )
}

export default ProtectedRoutes
