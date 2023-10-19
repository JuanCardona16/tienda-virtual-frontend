import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/routes"
import { Dashboard } from "./index"

const Private = () => {
  return (
    <>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    </>
  )
}

export default Private