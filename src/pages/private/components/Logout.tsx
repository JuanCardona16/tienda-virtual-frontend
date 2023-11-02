import { UserKey } from "../../../constants/constants"
import { useAppDispatch } from "../../../hooks"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../../models/routes"
import { clearLocalStore } from "../../../utilities"
import { resetUser } from "../../../redux/states/auth/Auth.state"

const Logout = () => {
  const dispatch = useAppDispatch();
  const navitage = useNavigate();

  const logout = () => {
    clearLocalStore(UserKey);
    dispatch(resetUser);
    navitage(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

export default Logout