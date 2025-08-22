import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@ApiTags('Préstamos')
@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo préstamo' })
  @ApiResponse({ status: 201, description: 'Préstamo creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  create(@Body() createLoanDto: CreateLoanDto) {
    return this.loansService.create(createLoanDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los préstamos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de préstamos obtenida exitosamente',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Filtrar por estado',
  })
  @ApiQuery({
    name: 'startDate',
    required: false,
    description: 'Fecha de inicio para filtro de rango',
  })
  @ApiQuery({
    name: 'endDate',
    required: false,
    description: 'Fecha de fin para filtro de rango',
  })
  findAll(
    @Query('status') status?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    if (status) {
      return this.loansService.findByStatus(status);
    }

    if (startDate && endDate) {
      return this.loansService.findByDateRange(startDate, endDate);
    }

    return this.loansService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un préstamo por ID' })
  @ApiParam({ name: 'id', description: 'ID del préstamo' })
  @ApiResponse({ status: 200, description: 'Préstamo encontrado' })
  @ApiResponse({ status: 404, description: 'Préstamo no encontrado' })
  findOne(@Param('id') id: string) {
    return this.loansService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un préstamo' })
  @ApiParam({ name: 'id', description: 'ID del préstamo' })
  @ApiResponse({
    status: 200,
    description: 'Préstamo actualizado exitosamente',
  })
  @ApiResponse({ status: 404, description: 'Préstamo no encontrado' })
  update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loansService.update(id, updateLoanDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un préstamo' })
  @ApiParam({ name: 'id', description: 'ID del préstamo' })
  @ApiResponse({ status: 200, description: 'Préstamo eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Préstamo no encontrado' })
  remove(@Param('id') id: string) {
    return this.loansService.remove(id);
  }
}
