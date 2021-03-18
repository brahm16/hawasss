import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App';
import Login from './screens/Login';
import Register from './screens/Register';
import Activate from './screens/Activate';
import Private from './screens/Private';
import Admin from './screens/Admin';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';

import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
import HomeUser from './screens/HomeUser';
import Home from './screens/Home';
import About from './screens/headerItems/About';
import Contact from './screens/headerItems/Contact';
import Places from './screens/headerItems/Places';
import Services from './screens/headerItems/Services';
import Events from './screens/headerItems/Events';
import DashboardAdmin from './screens/Dashboard/Admin/DashboardAdmin';
import OwnerDashboard from './screens/Dashboard/Owner/OwnerDashboard';
import OwnerRoute from './Routes/OwnerRoute';
import ProfileAdmin from './screens/Dashboard/Admin/ProfileAdmin';
import ProfileOwner from './screens/Dashboard/Owner/ProfileOwner';
import DashboardUser from './screens/Dashboard/User/DashboardUser';
import ProfileUser from './screens/Dashboard/User/ProfileUser';
const DashAdmin = ({match}) => {
  return(
    <Switch>
        <Route path={match.path} exact={true} component={DashboardAdmin} />

       <Route path={`${match.path}/me`} exact={true} component={ProfileAdmin} />
 
    </Switch>
  );
};
const DashOwner = ({match}) => {
  return(
    <Switch>
        <Route path={match.path} exact={true} component={OwnerDashboard} />

       <Route path={`${match.path}/me`} exact={true} component={ProfileUser} />
 
    </Switch>
  );
};
const DashUser = ({match}) => {
  return(
    <Switch>
        <Route path={match.path} exact={true} component={DashboardUser} />

       <Route path={`${match.path}/me`} exact={true} component={ProfileUser} />
 
    </Switch>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/login' exact render={props => <Login {...props} />} />

      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route path='/users/home' exact render={props => <HomeUser {...props}  />} />
      <Route path='/users/me' exact render={props => <Home {...props} />} />
      <Route path='/about' exact render={props => <About {...props}  />} />
      <Route path='/contact' exact render={props => <Contact {...props}  />} />
      <Route path='/places' exact render={props => <Places {...props}  />} />
      <Route path='/services' exact render={props => <Services {...props}  />} />
      <Route path='/events' exact render={props => <Events {...props}  />} />
      <OwnerRoute path='/owner' component={OwnerDashboard}  /> 

      <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <PrivateRoute path="/profile" exact component={Private} />
       <AdminRoute path="/admin"  component={DashAdmin} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
