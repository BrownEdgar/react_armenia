import React from 'react'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

export default function PrivateRoute() {
  const isLogin = useLoaderData()

  return (
    <div>
      {isLogin ? <Outlet context={{ basketCount: 8 }} /> : <Navigate to='/' />}
    </div>
  )
}

export const chekcUser = () => {
  return localStorage.getItem('login') ? true : false
}