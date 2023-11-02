import { userAppSelector } from "../hooks"
import { PublicRoutes } from "../models/routes"
import { selectUserInfo } from "../redux/states/auth/Auth.state"
import { Outlet, Navigate } from 'react-router-dom'

const AuthGuard = () => {
  const userState = userAppSelector(selectUserInfo)
  return userState?.user?.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard