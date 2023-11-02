import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/routes"
import { Dashboard } from "./index"
import { RoutesWithNotFound } from "../../utilities"

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
    </RoutesWithNotFound>
  )
}

export default Private