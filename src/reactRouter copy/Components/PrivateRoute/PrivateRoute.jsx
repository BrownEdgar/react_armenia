import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'
import ROUTES from '../../routes';

export default function PrivateRoute() {

  const islogin = useLoaderData()
  console.log(islogin);
  return (
    <div>
      {islogin ? <Outlet /> : <Navigate to='/' />}
      {/* <Outlet context={{backetCount : 8}}/> */}
    </div>
  )
}


export const checkUser = () => {
  return localStorage.getItem('login') ? true : false
}


