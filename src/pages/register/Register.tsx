import styled from './register.module.css'
import { useAppDispatch } from "../../hooks";
import { singin } from "../../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { PublicRoutes } from "../../models/routes";
import imagenRegister from '../../assets/365cons-124.svg'
import { InputForm } from '../../styled-components/input';

type formData = {
  username: string,
  email: string,
  password: string
}
interface formDataRegister {
  username: string,
  email: string,
  password: string
}

const Register = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm<formDataRegister>();

  const onSubmitForm: SubmitHandler<formData> = (data) => {
    dispatch(singin(data))
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return (
    <div className={styled.register}>
      <form className={styled.form} onSubmit={handleSubmit(onSubmitForm)}>
        <img className={styled.imageForm} src={imagenRegister} alt="imagen de castor para el login" width={90} />
        <h2 className={styled.formTitle}>Create accout</h2>
        <label htmlFor="username">Name
          <InputForm type="username" placeholder='your user name!' {...register('username', { required: true })} />
          { errors.username 
              ? (<span className={styled.error}>Este campo es requerido!</span>)
              : null
          }
        </label>
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
        <button className={styled.formButton}>Create accout</button>
      </form>
      <span>Do have an account? <Link to={'/login'}>Sign in</Link></span>
    </div>
  )
}

export default Register