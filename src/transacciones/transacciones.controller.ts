import {
  Controller,
  Body,
  Post,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import {
  TransaccionesDto,
  UpdateTransaccionDto,
} from './dto/transacciones.dto';
import { Transacciones } from './transacciones.entity';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private transaccionesService: TransaccionesService) {}

  @Get()
  getTransacciones(): Promise<Transacciones[]> {
    return this.transaccionesService.getTransacciones();
  }

  @Get(':mov')
  getTransaccionesMov(@Param() params: any): Promise<Transacciones[]> {
    return this.transaccionesService.getTransaccionesPorMovimiento(params.mov);
  }

  @Post()
  crearTransaccion(
    @Body() transaccion: TransaccionesDto,
  ): Promise<Transacciones> {
    return this.transaccionesService.crearTransaccion(transaccion);
  }

  @Delete(':id')
  eliminarTransaccion(@Param('id', ParseIntPipe) id: number) {
    return this.transaccionesService.deleteTransaccion(id);
  }
  @Patch(':id')
  updateTransaccion(
    @Param('id', ParseIntPipe) id: number,
    @Body() transaccion: UpdateTransaccionDto,
  ) {
    return this.transaccionesService.updateTransaccion(id, transaccion);
  }
}
