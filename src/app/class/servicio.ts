import { Paquete } from "./paquete";

export class Servicio {
    id: number;
    nombre: string;
    descripcion: string;
    fecha: Date;
    duracion: number;
    estado: boolean;
    paqueteId: Paquete;
    precio: number;
}
