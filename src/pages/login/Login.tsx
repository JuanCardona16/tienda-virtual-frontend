import React, { useState } from "react"
// import { useAppDispatch } from "../../hooks";
// import { singin } from "../../services/auth.service";

interface formDataLogin {
  username: string,
  email: string,
  password: string
}

function Login() {

  // const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<formDataLogin>({
    username: "",
    email: "",
    password: ""
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const onSubmitForm = (event: React.FormEvent): void => {
    event.preventDefault();
    // dispatch(singin({
    //   name: formData.username,
    //   email: formData.email,
    //   password: formData.email
    // }))
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <h2>Login</h2>
        <label htmlFor="name">UserName</label>
        <input 
          type="text" 
          name="name" 
          id="name" 
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
          type="password" 
          name="password"
          id="password" 
          onChange={onChange}
          />
          <button>Enviar</button>
      </form>
    </div>
  )
}

export default Login