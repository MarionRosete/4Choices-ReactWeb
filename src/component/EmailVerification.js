import React from 'react'
import{Link} from 'react-router-dom'
const EmailVerification=()=> {
    return (
        <div>
            <h1>Email Sent!, Check your Email and Click the link  to activate your account, When done clicking, please login your account. </h1>
            <span className="text-xs text-blue-500"><Link to="/">&nbsp;Login your account!</Link></span>
        </div>
    )
}

export default EmailVerification
