import axios from 'axios';
import { Credentials, RegisterResponse } from './auth-models';
import { API } from '../../shared/api-endpoints';

export const registerUser = (credentials: Credentials) =>
  axios.post<RegisterResponse>(API.REGISTER, credentials);
