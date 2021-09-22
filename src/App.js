import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import CreateExam from './component/auth/CreateExam'

import FindYourAccount from './component/FindYourAccount';
import QandA from './component/auth/QandA';
import Exams from './component/auth/Exams';

function App(){
    const token=localStorage.getItem('token')
  
  return (
    <>
     
      <Router>
            <Switch>

                <Route exact path="/Register" component={Register}/>
                <Route exac path="/Forgetpassword" component={FindYourAccount}/>
                <Route exact path="/" component={Login}>
                {token !=null ?  <Redirect to="/Dashboard" /> : <Login />}
                </Route>
               
                <ProtectedRoutes  >
                <div className ="grid grid-flow-col min-h-screen bg-white">
                  <Dashboard />
                    <Route exact path="/CreateExam" component={CreateExam} /> 
                    <Route exact path="/MyExam" component={Exams}/>
                    <Route exact path="/QandA" component={QandA} />
                </div> 
                </ProtectedRoutes>

             </Switch>
      </Router>
     
   
    </>
  );
}

export default App;
