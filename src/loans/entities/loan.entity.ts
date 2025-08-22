import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';

export class Loan {
  @ApiProperty({ description: 'ID único del préstamo' })
  id: string;

  @ApiProperty({ description: 'Fecha de inicio del préstamo' })
  startDate: Date;

  @ApiProperty({ description: 'Fecha de finalización del préstamo' })
  endDate: Date;

  @ApiProperty({ description: 'Persona que recibe el préstamo' })
  to: string;

  @ApiProperty({ description: 'Persona que otorga el préstamo' })
  from: string;

  @ApiProperty({ description: 'Número de teléfono' })
  phoneNumber: string;

  @ApiProperty({ description: 'Monto del préstamo' })
  amount: Decimal;

  @ApiProperty({ description: 'Tasa de interés', required: false })
  interest?: Decimal | null;

  @ApiProperty({ description: 'Estado del préstamo' })
  status: string;

  @ApiProperty({ description: 'Descripción del préstamo', required: false })
  description?: string;

  @ApiProperty({ description: 'Fecha de creación' })
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de actualización' })
  updatedAt: Date;
}
