import { User } from "./user";
import { Wing } from "./wing";

export interface Squad {
    id: number,
    Squad_name: string,
    wing: Wing,
    Squad_commander: User, 
    Squad_coordinator: User
}
