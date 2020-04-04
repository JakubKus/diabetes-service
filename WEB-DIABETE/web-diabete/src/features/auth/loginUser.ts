import { Credentials } from './auth-models';
import { API_ENDPOINTS } from '../../shared/api-endpoints';

export const loginUser = (credentials: Credentials) =>
  fetch(API_ENDPOINTS.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password
    })
  });
