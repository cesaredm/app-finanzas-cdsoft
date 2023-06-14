export class TransaccionesDto {
  fecha: any;
  tipoMovimiento: string;
  monto: number;
  nota: string;
}

export class UpdateTransaccionDto {
  fecha?: any;
  tipoMovimiento?: string;
  monto?: number;
  nota?: string;
}
