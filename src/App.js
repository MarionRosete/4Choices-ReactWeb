import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import Sidebar from './component/auth/Sidebar'
import Dashboard from './component/auth/Dashboard'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import CreateExam from './component/auth/CreateExam'
import ProtectedRoutes from './ProtectedRoutes';
import FindYourAccount from './component/FindYourAccount';
import QandA from './component/auth/QandA';
import Exams from './component/auth/Exams';
import AttendeesLogin from './component/AttendeesLogin';
import AttendeesExam from './component/AttendeesExam';

function App(){
    const token=localStorage.getItem('token')
  
  return (
    <>
     
      <Router>
            <Switch>
                <Route exact path="/AttendeesExam" component={AttendeesExam}/>
                <Route exact path="/Attendeeslogin" component={AttendeesLogin}/>
                <Route exact path="/Register" component={Register}/>
                <Route exac path="/Forgetpassword" component={FindYourAccount}/>
                <Route exact path="/" component={Login}>
                {token!=null?<Redirect to="/Dashboard"/>:<Login/>}
                </Route>
            
                <ProtectedRoutes >
                <div className ="min-h-screen md:flex">
                <Sidebar/>
                      <div className="flex-1 p-20">
                      <Switch>
                      <Route exact path="/Dashboard" component={Dashboard}/>
                      <Route exact path="/CreateExam" component={CreateExam} /> 
                      <Route exact path="/MyExam" component={Exams}/>
                      <Route exact path="/QandA" component={QandA} />
                      </Switch>
                      </div>
                </div>
                </ProtectedRoutes>
           
            </Switch>  
      </Router>
     
   
    </>
  );
}

export default App;
