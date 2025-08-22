import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  async create(createLoanDto: CreateLoanDto) {
    return this.prisma.loan.create({
      data: {
        ...createLoanDto,
        startDate: new Date(createLoanDto.startDate),
        endDate: new Date(createLoanDto.endDate),
      },
    });
  }

  async findAll() {
    return this.prisma.loan.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const loan = await this.prisma.loan.findUnique({
      where: { id },
    });

    if (!loan) {
      throw new NotFoundException(`Préstamo con ID ${id} no encontrado`);
    }

    return loan;
  }

  async update(id: string, updateLoanDto: UpdateLoanDto) {
    await this.findOne(id); // Verificar que existe

    return this.prisma.loan.update({
      where: { id },
      data: {
        ...updateLoanDto,
        startDate: updateLoanDto.startDate
          ? new Date(updateLoanDto.startDate)
          : undefined,
        endDate: updateLoanDto.endDate
          ? new Date(updateLoanDto.endDate)
          : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Verificar que existe

    return this.prisma.loan.delete({
      where: { id },
    });
  }

  // Métodos adicionales
  async findByStatus(status: string) {
    return this.prisma.loan.findMany({
      where: { status },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByDateRange(startDate: string, endDate: string) {
    return this.prisma.loan.findMany({
      where: {
        startDate: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      orderBy: { startDate: 'asc' },
    });
  }
}
