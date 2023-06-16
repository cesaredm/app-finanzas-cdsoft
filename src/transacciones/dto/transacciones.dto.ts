export class TransaccionesDto {
  fecha: Date;
  tipoMovimiento: string;
  monto: number;
  moneda: string;
  nota: string;
}

export class UpdateTransaccionDto {
  fecha?: Date;
  tipoMovimiento?: string;
  monto?: number;
  moneda?: string;
  nota?: string;
}
