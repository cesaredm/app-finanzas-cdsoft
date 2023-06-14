export class TransaccionesDto {
  fecha: Date;
  tipoMovimiento: string;
  monto: number;
  nota: string;
}

export class UpdateTransaccionDto {
  fecha?: Date;
  tipoMovimiento?: string;
  monto?: number;
  nota?: string;
}
