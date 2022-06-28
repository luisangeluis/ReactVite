import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = ({islogged}) => {
  if(islogged){
    return <Outlet />
  }else{
    return <Navigate to="/login"/>
  }
}

export default ProtectedRoutes