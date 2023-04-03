import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GestionDePrestamosModule } from './gestion-de-prestamos.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(GestionDePrestamosModule);
  const config = new DocumentBuilder()
    .setTitle('sistema')
    .setDescription('gestion de prestamos')
    .setVersion('1.0')
    .addTag('Miguel')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://root:password@localhost:5672'],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001);
  console.log(
    `🚀 Application is running on: ${await app.getUrl()} - GESTION DE PRESTAMOS🚀`,
  );
}
bootstrap();
