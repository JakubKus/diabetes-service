import axios from 'axios';
import { Credentials, LoginResponse } from './auth-models';
import { API } from '../../shared/api-endpoints';

export const loginUser = (credentials: Credentials) =>
  axios.post<LoginResponse>(API.LOGIN, credentials);
