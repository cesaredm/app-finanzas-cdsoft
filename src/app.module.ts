import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransaccionesModule } from './transacciones/transacciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db4free.net',
      username: 'cesar4957_',
      password: '19199697tsoCD',
      database: 'finanzascdsoft',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    TransaccionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
