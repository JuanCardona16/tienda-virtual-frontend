import './login.css';
import { useState } from "react";
import { useAppDispatch, userAppSelector } from "../../hooks";
import { singup } from "../../services/auth.service";
import { selectUserInfo } from "../../redux/states/auth/User.state";
// import { useForm } from 'react-hook-form'

interface formDataLogin {
  email: string,
  password: string
}

const Register = () => {

  const dispatch = useAppDispatch();
  const userInfo = userAppSelector(selectUserInfo);

  // const { handleSubmit, register } = useForm<formDataLogin>();

  const [formData, setFormData] = useState<formDataLogin>({
    email: "",
    password: ""
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const onSubmitForm = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(singup({
      email: formData.email,
      password: formData.password
    }))
    console.log(formData)
  }

  return (
    <div className='login' id='login'>
      <form onSubmit={onSubmitForm}>
        <h2>Login</h2>
        <br />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          onChange={onChange}
          />
        <br />
        <label htmlFor="password">Password</label>
        <input 
          type="text" 
          name="password"
          id="password" 
          onChange={onChange}
          />
          <button>Enviar</button>
      </form>
      <br />
      <div>
        <h2>User Info Loget</h2>
        <p>username: {userInfo.user.username}</p>
        <p>email: {userInfo.user.email}</p>
        <p>id: {userInfo.user.id}</p>
        <p>Token acces: {userInfo.token}</p>
      </div>
      <br />
      <img src="https://i.imgur.com/sufNDTS.png" alt="imagen" />
    </div>
  )
}

// PaulaG@2023#11

export default Register