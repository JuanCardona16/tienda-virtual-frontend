import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../models/routes"
import { Home } from "./index"
import { RoutesWithNotFound } from "../../utilities"

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Home />} />
    </RoutesWithNotFound>
  )
}

export default Private