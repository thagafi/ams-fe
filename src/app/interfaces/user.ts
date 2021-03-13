import { Role } from "./role";

export interface User {
    id: number;
    username: string;
    first_name: string;
    second_name: string;
    third_name: string;
    last_name: string;
    rank: string;
    role: Role;
}
