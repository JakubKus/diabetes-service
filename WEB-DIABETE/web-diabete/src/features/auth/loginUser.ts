import axios from 'axios';
import { Credentials, LoginResponse } from './auth-models';
import { API_ENDPOINTS } from '../../shared/api-endpoints';

export const loginUser = (credentials: Credentials) =>
  axios.post<LoginResponse>(API_ENDPOINTS.LOGIN, credentials);
