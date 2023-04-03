import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

/**
 * Este dto es el encargado de recibir los datos de un libro para eliminarlo
 *
 * @param {id} string // el id del libro
 * @export
 * @class DeleteBookDto
 */
export class DeleteBookDto {
  @ApiProperty({
    example: '5f9f1c9c0b9b9c0b9c0b9c0b',
    description: 'se genera automaticamente id',
  })
  @IsString()
  _id: string;
}
