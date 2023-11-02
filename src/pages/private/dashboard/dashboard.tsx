import { userAppSelector } from "../../../hooks";
import { selectUserInfo } from "../../../redux/states/auth/Auth.state";
import Logout from "../components/Logout";

const Dashboard = () => {

  const userInfo = userAppSelector(selectUserInfo);

  return (
    <div>
      <h1>This is dashoard pages</h1>
      <p>{userInfo.user.username}</p>
      <p>{userInfo.user.email}</p>
      <p>{userInfo.token}</p>
      <Logout />
    </div>
  );
}

export default Dashboard