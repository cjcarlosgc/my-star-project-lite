import { LoginUser } from "./login-user";

export interface LoginUserStore {
    loginUser: LoginUser | null;
    setLoginUser: (newLoginUser: LoginUser) => void; 
}
