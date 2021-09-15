import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import CreateExam from './component/auth/CreateExam'
import EmailVerification from './component/EmailVerification';
import FindYourAccount from './component/FindYourAccount';

function App(){
    const token=localStorage.getItem('token')
  return (
    <>
      
      <Router>
        <Switch>
            <Route exact path="/Register" component={Register}/>
            <Route exac path="/Forgetpassword" component={FindYourAccount}/>
            <Route exact path="/" component={Login}>
              {token !=null ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route exact path="/EmailVerification" component={EmailVerification}/>
            <ProtectedRoutes exact path="/Dashboard" component={Dashboard} /> 
            <ProtectedRoutes exact path="/CreateExam" component={CreateExam}/>
        </Switch>
     
      </Router>
     
    </>
  );
}

export default App;
