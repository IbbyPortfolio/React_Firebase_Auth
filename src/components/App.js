import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import AddProject from './project/AddProject';

function App() {
   return (
      <Container
         className='d-flex align-items-center justify-content-center'
         style={{ minHeight: '100vh' }}
      >
         <div className='w-100' style={{ maxWidth: '400px' }}>
            <Router>
               <AuthProvider>
                  <Switch>
                     <PrivateRoute exact path='/' component={Dashboard} />
                     <PrivateRoute
                        path='/update-profile'
                        component={UpdateProfile}
                     />
                     <Route path='/signup' component={Signup} />
                     <Route path='/login' component={Login} />
                     <Route
                        path='/forgot-password'
                        component={ForgotPassword}
                     />
                     <Route path='/add-project' component={AddProject} />
                  </Switch>
               </AuthProvider>
            </Router>
         </div>
      </Container>
   );
}

export default App;
