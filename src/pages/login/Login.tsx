import styled from './login.module.css';
import { useAppDispatch } from "../../hooks";
import { singup } from "../../services/auth.service";
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form'
import { PrivateRoutes } from '../../models/routes';
import imagenLogin from '../../assets/365cons-033.svg'
import { InputForm } from '../../styled-components/input';

type formData = {
  email: string,
  password: string
}
interface formDataLogin {
  email: string,
  password: string
}

const Login = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm<formDataLogin>();

  const onSubmitForm: SubmitHandler<formData> = (data) => {
    dispatch(singup(data))
    navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
  }

  return (
    <div className={styled.login}>
      <form className={styled.form} onSubmit={handleSubmit(onSubmitForm)}>
        <img className={styled.imageForm} src={imagenLogin} alt="imagen de castor para el login" width={150} />
        <h2 className={styled.formTitle}>Sign in</h2>
        <label htmlFor="email">Email
          <InputForm type="email" placeholder='example@gmail.com' {...register('email', { required: true })} />
          { errors.email 
              ? (<span className={styled.error}>Este campo es requerido!</span>)
              : null
          }
        </label>
        <label htmlFor="email">Password
          <InputForm type="password" placeholder='your password!' {...register('password', { 
            required: true,  
            minLength: 6,
            pattern: /^\S*$/,
            validate: {
              format: (password) => {
                return /[A-Z]/g.test(password) && /[a-z]/g.test(password) && /[0-9]/g.test(password);
              }
            }
          })} 
          />
          { errors.password 
              ? (<span className={styled.error}>Este campo es requerido!</span>)
              : null
          }
        </label>
        <button className={styled.formButton}>Sing in</button>
      </form>
      <span>Dont have an account? <Link to={'/register'}>Create now</Link></span>
    </div>
  )
}

// PaulaG@2023#11

export default Login;