import axios from 'axios';
import { API } from 'shared/api-endpoints';
import { Credentials, RegisterResponse } from './auth-models';

export const registerUser = (credentials: Credentials) => axios.post<RegisterResponse>(API.REGISTER, credentials);
