import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { IntrastructureModule } from './infrastructure/infrastructure.module';

/**
 * Este modulo se encarga de la inyeccion de dependencias de los
 * modulo de IntrastructureModule y de la configuracion de las variables de entorno
 *
 * @export
 * @class AppModule
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
      // envFilePath: '../environments/.env.dev',
    }),
    IntrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
