import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transacciones } from './transacciones.entity';
import {
  TransaccionesDto,
  UpdateTransaccionDto,
} from './dto/transacciones.dto';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transacciones)
    private transaccionRepository: Repository<Transacciones>,
  ) {}

  crearTransaccion(transaccion: TransaccionesDto) {
    const newTransaccion = this.transaccionRepository.create(transaccion);
    return this.transaccionRepository.save(newTransaccion);
  }

  getTransacciones() {
    return this.transaccionRepository.find();
  }

  getTransaccionesPorMovimiento(mov: string) {
    return this.transaccionRepository.find({
      where: {
        tipoMovimiento: mov,
      },
    });
  }

  getTrans(dato: Date) {
    return this.transaccionRepository
      .createQueryBuilder('transacciones')
      .where('date(transacciones.fecha) = :dato', { dato });
  }

  deleteTransaccion(id: number) {
    return this.transaccionRepository.delete({ id });
  }

  updateTransaccion(id: number, transaccion: UpdateTransaccionDto) {
    return this.transaccionRepository.update({ id }, transaccion);
  }
}
