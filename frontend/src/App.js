import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from './helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import Header from "./screens/Item/Header"
import Landing from './screens/Item/Landing';

function App({ history }) {
  return (
    <>
     <Landing />
     
      
    </>
  
  );
}

export default App;
