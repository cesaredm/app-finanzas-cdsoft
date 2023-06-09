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
      host: 'containers-us-west-163.railway.app',
      port: 7972,
      username: 'root',
      password: 'ovYlSO3Sn4w5XUk41HXN',
      database: 'railway',
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
