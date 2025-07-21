import { MenuItem } from "@/types/menu-item";
import { Role } from "@/utils/enums";

export interface LoginOutput {
    userId: string;
    userName: string;
    firstName: string;
    lastName: string;
    role: Role;
    menuItems: MenuItem[];
}

export interface LoginOutputRoot {
    login: LoginOutput;
}