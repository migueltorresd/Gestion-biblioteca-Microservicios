import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { IntrastructureModule } from './infrastructure/infrastructure.module';

/**
 * Este es el módulo principal de la aplicación que se encarga de
 * inyectar los módulos de infraestructura y de configuración
 * de la aplicación y variables de entorno
 *
 * @export
 * @class GestionDePrestamosModule
 * @typedef {GestionDePrestamosModule}
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
export class GestionDePrestamosModule {}
