import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transacciones {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;
  @Column({ type: 'datetime' })
  fecha: any;
  @Column({ type: 'varchar', length: 15 })
  tipoMovimiento: string;
  @Column({ type: 'decimal', precision: 12, scale: 2 })
  monto: number;
  @Column({ type: 'varchar', length: 120 })
  nota: string;
}
