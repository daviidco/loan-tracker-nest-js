import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsDecimal,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateLoanDto {
  @ApiProperty({
    example: '2024-01-01T00:00:00.000Z',
    description: 'Fecha de inicio del préstamo',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    example: '2024-12-31T00:00:00.000Z',
    description: 'Fecha de finalización del préstamo',
  })
  @IsDateString()
  endDate: string;

  @ApiProperty({
    example: 'Juan Pérez',
    description: 'Persona que recibe el préstamo',
  })
  @IsString()
  to: string;

  @ApiProperty({
    example: 'María García',
    description: 'Persona que otorga el préstamo',
  })
  @IsString()
  from: string;

  @ApiProperty({
    example: '+57 300 123 4567',
    description: 'Número de teléfono',
  })
  @IsPhoneNumber()
  phoneNumber: string;

  @ApiProperty({
    example: '1000000.00',
    description: 'Monto del préstamo',
  })
  @IsDecimal()
  amount: string;

  @ApiProperty({
    example: '5.50',
    description: 'Tasa de interés',
    required: false,
  })
  @IsOptional()
  @IsDecimal()
  interest?: string;

  @ApiProperty({
    example: 'active',
    description: 'Estado del préstamo',
    required: false,
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({
    example: 'Préstamo para compra de vehículo',
    description: 'Descripción del préstamo',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
