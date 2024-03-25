import { Venta } from "./venta";

export class Cliente {
    id: number;
    estado: Boolean;
    compras: Set<Venta>
}
