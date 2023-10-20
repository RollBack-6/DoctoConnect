import React from 'react'
import { Outlet } from 'react-router-dom';
import LoginPageN from './Components/Login/LoginPageN';

const useAuth= ()=>{
    const user = {loggediIn : false};
    return user && user.loggedIn;
};


export default function ProtectedRouts() {
  return (
    <div>
      const isAuth = useAuth();
      return isAuth ? <Outlet/> : <LoginPageN/>;
    </div>
  )
}
