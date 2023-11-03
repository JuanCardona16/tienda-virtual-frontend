import styled from './home.module.css'
import Header from "../../../components/header/Header";
import Logout from "../components/Logout";
import { InputForm } from '../../../styled-components/input';
import { SubmitHandler, useForm } from 'react-hook-form';
import Nadvar from '../../../components/menu/nadvar';

type searchForm = {
  query: string
}

interface searchFormData {
  query: string
}

const Home = () => {

  const { handleSubmit, register } = useForm<searchFormData>();

  const submitForm: SubmitHandler<searchForm> = (data) =>{
    console.log(data)
  }

  return (
    <section className={styled.homePage}>
      <Header />
      <form onSubmit={handleSubmit(submitForm)}>
        <InputForm 
          placeholder='searh products...' 
          type='text' 
          {...register('query', { required: true })} 
        />
      </form>
      <h1>This is dashboard pages</h1>
      <Logout />
      <Nadvar />
    </section>
  );
}

export default Home