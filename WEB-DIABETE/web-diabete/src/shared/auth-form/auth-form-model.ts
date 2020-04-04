export interface AuthFormModel {
  username: string,
  password: string,
  handleUsername: (text: string) => void,
  handlePassword: (text: string) => void,
}
