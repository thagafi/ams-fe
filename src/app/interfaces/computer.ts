import { Brand } from "./brand";
import { Cpu } from "./cpu";
import { Monitor } from "./monitor";
import { Os } from "./os";
import { Ram } from "./ram";
import { Squad } from "./squad";
import { User } from "./user";

export interface Computer {
    id: string,
    computer_name: string,
    date: string,
    squad: Squad,
    user: User,
    cpu: Cpu,
    ram: Ram,
    monitor_size: Monitor,
    os: Os,
    brand: Brand
}

