import React from 'react'
import {Route, Redirect} from 'react-router-dom'

function ProtectedRoutes({ props, component:Component, ...rest}) {
    return (
        <Route {...rest} render={(props) => {
            if(props==="successful"){
                return <Component/>
            }else{
                return <Redirect to={{pathname: '/', state:{from: props.location}}}/>
            }
        }}/>
    )
}

export default ProtectedRoutes
