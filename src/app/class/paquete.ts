import { Servicio } from "./servicio";
import { Venta } from "./venta";

export class Paquete {
    id: number;
    tipo: string;
    nombre: string;
    descripcion: string;
    precioVenta: number;
    duracion: number;
    estado: boolean;
    servicios: Set<Servicio>;
    ventas: Set<Venta>;
}
