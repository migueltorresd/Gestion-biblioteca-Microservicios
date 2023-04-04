import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Este metodo se encarga de crear la aplicacion y de configurar el microservicio
 * para que este pueda escuchar los mensajes que se envian por el bus de mensajeria *
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Sistema de Biblioteca')
    .setDescription('Clasificacion')
    .setVersion('1.0')
    .addTag('Miguel Angel Torres Diaz')
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
  await app.listen(3000);
  console.log(
    `🚀 Application is running on: ${await app.getUrl()} - CLASIFICACION_DE_LIBROS🚀`,
  );
}
bootstrap();
