import React, { useState } from "react"
import { useAppDispatch } from "../../hooks";
import { singin } from "../../services/auth.service";

interface formDataRegister {
  username: string,
  email: string,
  password: string
}

const Register = () => {

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<formDataRegister>({
    username: "",
    email: "",
    password: ""
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const onSubmitForm = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(singin({
      username: formData.username,
      email: formData.email,
      password: formData.password
    }))
  }

  return (
    <div className="login">
      <form onSubmit={onSubmitForm}>
        <h2>Register</h2>
        <label htmlFor="username">UserName</label>
        <input 
          type="text" 
          name="username" 
          id="username" 
          onChange={onChange}
          />
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
    </div>
  )
}

export default Register