import { Cliente } from "./cliente";
import { Employee } from "./employee";
import { Paquete } from "./paquete";

export class Venta {
    id: number;
    medioPago: string;
    monto: number;
    fecha: Date;
    estado: Boolean;
    clienteId: Cliente;
    empleadoId: Employee;
    paquete: Set<Paquete>;
}
