import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { IntrastructureModule } from './infrastructure/infrastructure.module';

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
