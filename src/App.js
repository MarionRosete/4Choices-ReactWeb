import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import CreateExam from './component/auth/CreateExam'


function App(){
    const token=localStorage.getItem('token')
  return (
    <>
      
      <Router>
        <Switch>
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/" component={Login}>
              {token !=null ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <ProtectedRoutes exact path="/Dashboard" component={Dashboard} /> 
            <ProtectedRoutes exact path="/CreateExam" component={CreateExam}/>
        </Switch>
     
      </Router>
     
    </>
  );
}

export default App;
