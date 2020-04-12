import axios from 'axios';
import { Credentials, RegisterResponse } from './auth-models';
import { API_ENDPOINTS } from '../../shared/api-endpoints';

export const registerUser = (credentials: Credentials) =>
  axios.post<RegisterResponse>(API_ENDPOINTS.REGISTER, credentials);
