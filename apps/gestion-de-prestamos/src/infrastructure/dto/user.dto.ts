import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * este DTO es el encargado de recibir los datos para crear un usuario
 * usando el metodo createUser
 *
 * @export
 * @class CreateUserDto
 * @typedef {CreateUserDto}
 */
export class CreateUserDto {
  /**
   * nombre del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'Miguel',
    description: 'Nombre del usuario',
  })
  @IsString()
  name: string;

  /**
   * email del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'miguel@hotmail.com',
    description: 'Correo del usuario',
  })
  @IsString()
  email: string;

  /**
   * documento del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: '123456789',
    description: 'Documento del usuario',
  })
  @IsString()
  doument: string;

  /**
   * telefono del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: '31962444444',
    description: 'Telefono del usuario',
  })
  @IsString()
  phone: string;

  /**
   * Rol del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'admin',
    description: 'Rol del usuario',
  })
  @IsString()
  user: string;

  /**
   * Contraseña del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: '123456**ksjdbv',
    description: 'Contraseña del usuario',
  })
  @IsString()
  password: string;

  /**
   * Estado del usuario
   *
   * @type {string}
   */
  @ApiProperty({
    example: 'true',
    description: 'Estado del prestamo',
  })
  @IsString()
  lender: string;
}
