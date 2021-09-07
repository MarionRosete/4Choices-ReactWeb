import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';



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
        </Switch>
          <ProtectedRoutes exact path="/Dashboard" component={Dashboard} /> 
          
      </Router>
     
    </>
  );
}

export default App;
