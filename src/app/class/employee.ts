import { Login } from "./login";
import { Venta } from "./venta";

export class Employee {
    id: number;
    cargo: string;
    sueldo: number;
    email: string;
    dni: string;
    estado: boolean;
    ventas: Set<Venta>;
    user: Login;
}
