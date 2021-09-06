import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoutes({  component:Component, ...rest}) {
    const isAuthenticated = localStorage.getItem("status");
    
    return (
        <Route {...rest} render={(props) => {
            if(isAuthenticated==="successful"){
                return <Component/>
            }else{
                return <Redirect to={{pathname: '/', state:{from: props.location}}}/>
            }
        }}/>
    )
}

export default ProtectedRoutes
