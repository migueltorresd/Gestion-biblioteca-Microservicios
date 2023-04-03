import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Miguel',
    description: 'Nombre del usuario',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'miguel@hotmail.com',
    description: 'Correo del usuario',
  })
  @IsString()
  email: string;

  @ApiProperty({
    example: '123456789',
    description: 'Documento del usuario',
  })
  @IsString()
  doument: string;

  @ApiProperty({
    example: '31962444444',
    description: 'Telefono del usuario',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    example: 'admin',
    description: 'Rol del usuario',
  })
  @IsString()
  user: string;

  @ApiProperty({
    example: '123456**ksjdbv',
    description: 'Contraseña del usuario',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'true',
    description: 'Estado del prestamo',
  })
  @IsString()
  lender: string;
}
