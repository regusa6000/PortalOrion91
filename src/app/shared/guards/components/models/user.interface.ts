export interface User{
  email: string;
  password: string;
}

export interface UserResponse{
  message: string;
  data: [{id_user: string,name: string, email: string, password: string}];
}

export interface UserRegister{
  name: string,
  email: string,
  password: string,
}
