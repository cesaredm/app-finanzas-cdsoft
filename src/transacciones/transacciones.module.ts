import { Module } from '@nestjs/common';
import { TransaccionesController } from './transacciones.controller';
import { TransaccionesService } from './transacciones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Transacciones} from './transacciones.entity'

@Module({
  imports:[TypeOrmModule.forFeature([Transacciones])],
  controllers: [TransaccionesController],
  providers: [TransaccionesService],
})
export class TransaccionesModule {}
