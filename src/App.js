import React from 'react'
import Login from './component/teacher/Authteacher/Login'
import Register from './component/teacher/Authteacher/Register'
import Sidebar from './component/teacher/Sidebar'
import Dashboard from './component/teacher/Dashboard'
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import CreateExam from './component/teacher/CreateExam'
import ProtectedRoutes from './ProtectedRoutes';
import FindYourAccount from './component/teacher/Authteacher/FindYourAccount';
import QandA from './component/teacher/QandA';
import Exams from './component/teacher/Exams';
import AttendeesLogin from './component/attendees/AttendeesLogin';
import AttendeesExam from './component/attendees/AttendeesExam';
import CreateQandA from './component/teacher/CreateQandA'
import Classes from './component/teacher/Classes'
import CreateClass from './component/teacher/CreateClass'
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
                      <div className="flex-1 p-10">
                      <Switch>
                      <Route exact path="/Dashboard" component={Dashboard}/>
                      <Route exact path="/CreateExam" component={CreateExam} />
                      <Route exact path="/CreateQandA" component={CreateQandA}/>
                      <Route exact path="/MyClasses" component={Classes}/>
                      <Route exact path="/CreateClass" component={CreateClass}/>
                      <Route exact path="/MyExam" component={Exams}/>
                      <Route exact path="/QandA" component={QandA}/>
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
