import { Role } from "@/utils/enums";
import { MenuItem } from "./menu-item";

export interface LoginUser {
    userId: string;
    userName: string;
    fullName: string;
    role: Role;
    menuItems: MenuItem[]
}