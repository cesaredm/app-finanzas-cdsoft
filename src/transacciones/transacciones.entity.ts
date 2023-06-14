import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transacciones {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  id: number;
  @Column({ type: 'datetime', nullable: true })
  fecha: any;
  @Column({ type: 'varchar', length: 15, nullable: true })
  tipoMovimiento: string;
  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  monto: number;
  @Column({ type: 'varchar', length: 120, nullable: true })
  nota: string;
}
