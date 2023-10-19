import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUserDto } from "../models";
import { tiendaApi } from "../api/config";
import { AxiosResponse } from "axios";

export const singin = createAsyncThunk(
  'auth/singin',
  async (user: CreateUserDto, trunkAPI) => {
    try {
      const response: AxiosResponse = await tiendaApi.post('/register', user);
      const { data } = response;
      return data;
    } catch (error) {
      return trunkAPI.rejectWithValue(error);
    }
  }
);

// http://localhost:8080/register

export const singup = createAsyncThunk(
  'auth/singup',
  async (user: { email: string, password: string }, thunkAPI) => {
    try {
      const response: AxiosResponse = await tiendaApi.post('/login', user);
      const { data } = response;
      console.log(response)
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error); 
    }
  }
)