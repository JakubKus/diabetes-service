import axios from 'axios';
import { API } from 'shared/api-endpoints';
import { Credentials, LoginResponse } from './auth-models';

export const loginUser = (credentials: Credentials) => axios.post<LoginResponse>(API.LOGIN, credentials);
