
import Loginx from './pages/Login/Login'
import React from 'react'
// import Login from './components/Login'
import { Route,Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import socketClient from 'socket.io-client';

const App = () => {
  // const socket = socketClient();
  return (
    <div>
      <ToastContainer/>
      <Switch>
  <Route exact path="/" component={()=><Home/>} />

  <Route exact path="/login">
    <Loginx/>
  </Route>
  

</Switch>

       </div>
  )
}
export default App;