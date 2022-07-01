declare namespace Express {
  export interface Request {
    userLogin: Login;
  }
}

type Login = {
  id?: string;
  email?: string;
};
