import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/library', {
      useNewUrlParser: true, // es una opción que se debe agregar para evitar un error de conexión con la base de datos
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
