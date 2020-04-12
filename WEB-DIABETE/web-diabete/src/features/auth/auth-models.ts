export interface AuthState {
  isLogged: boolean;
  isPending: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string,
  user: User
}

export interface RegisterResponse extends User {}

interface User {
  id: number,
  username: string
}
