import { User } from "./user";

export interface Wing {
    id: number,
    wing_name: string,
    wing_commander: User, 
    wing_coordinator: User
}
