import { LoginUser } from "@/types/login-user";
import { LoginUserStore } from "@/types/login-user-store";
import { StoreNames } from "@/utils/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLoginUserStore = create<LoginUserStore>()(persist<LoginUserStore>((set) => {
    return {
        loginUser: null,
        setLoginUser: (newLoginUser: LoginUser) => set({
            loginUser: newLoginUser
        })
    }
}, { name: StoreNames.LOGIN_USER } ));