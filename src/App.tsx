import './styles/App.css'
import { Register, Login, Home } from './pages'
import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import { AuthGuard } from './guards'
import RoutesWithNotFound from './utilities/RoutesWithNotFound'

function App() {
  return (
    <div className="app" >
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<Register />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Home />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </div>
  )
}

export default App
