export interface AuthState {
  isLogged: boolean;
  isPending: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}
