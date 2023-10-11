import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUserDto } from "../models";
import { tiendaApi } from "../api/config";
import { AxiosResponse } from "axios";

export const singin = createAsyncThunk(
  'auth/signup',
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
