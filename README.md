# Loan Tracker API

RESTful API for loan tracking and management built with NestJS, Prisma, and PostgreSQL. Features complete CRUD operations, validation, and comprehensive Swagger documentation.

<div align="center">
<img width="1485" height="588" alt="image" src="https://github.com/user-attachments/assets/a56fdf92-2f5e-4734-8c91-e14e900d6994" />
</div>

## Technologies

- **NestJS** - Progressive Node.js framework
- **Prisma** - Next-generation ORM
- **PostgreSQL** - Relational database
- **TypeScript** - Type-safe JavaScript
- **Swagger/OpenAPI** - API documentation
- **Docker** - Database containerization
- **Class Validator** - DTO validation

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker and Docker Compose
- Git (optional)

## Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/daviidco/loan-tracker-nest-js.git
cd loan-tracker-nest-js

# Install dependencies
npm install
```

### 2. Database Setup

Start PostgreSQL with Docker:

```bash
# Start database containers
docker-compose -f docker-compose-db-loans.yaml up -d
```

The Docker setup includes:
- PostgreSQL database on port 5432
- pgAdmin interface on port 5050

### 3. Environment Configuration

Configure your `.env` file:

```env
DATABASE_URL="postgresql://loans_user:loans_password@localhost:5432/loans_db?schema=public"
```

### 4. Database Migration

```bash
# Run database migrations
npx prisma migrate dev

# Generate Prisma client
npx prisma generate
```

### 5. Start the Application

```bash
# Development mode with hot reload
npm run start:dev
```

## API Documentation

Once running, access:

- **Application**: http://localhost:3000
- **Swagger Documentation**: http://localhost:3000/api/docs
- **pgAdmin** (Database UI): http://localhost:5050

## API Endpoints

### Loans Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/loans` | Get all loans |
| `GET` | `/loans/:id` | Get loan by ID |
| `POST` | `/loans` | Create new loan |
| `PATCH` | `/loans/:id` | Update loan |
| `DELETE` | `/loans/:id` | Delete loan |

### Query Parameters

- `GET /loans?status=active` - Filter by status
- `GET /loans?startDate=2024-01-01&endDate=2024-12-31` - Filter by date range

## Data Model

```typescript
{
  id: string;          // Unique identifier
  startDate: Date;     // Loan start date
  endDate: Date;       // Loan end date
  to: string;          // Borrower name
  from: string;        // Lender name
  phoneNumber: string; // Contact number
  amount: Decimal;     // Loan amount
  interest: Decimal;   // Interest rate
  status: string;      // Loan status
  description: string; // Optional description
  createdAt: Date;     // Creation timestamp
  updatedAt: Date;     // Last update timestamp
}
```

## Development Commands

```bash
# Development
npm run start:dev

# Production build
npm run build

# Run tests
npm run test

# Database operations
npx prisma studio          # Database GUI
npx prisma migrate reset   # Reset database
npx prisma db seed         # Seed database
```

## Project Structure

```
src/
├── loans/                 # Loans module
│   ├── dto/              # Data Transfer Objects
│   ├── entities/         # TypeScript entities
│   ├── loans.controller.ts
│   ├── loans.service.ts
│   └── loans.module.ts
├── prisma/               # Prisma configuration
│   ├── prisma.service.ts
│   └── prisma.module.ts
├── app.module.ts         # Main app module
└── main.ts              # Application entry point

prisma/
├── schema.prisma        # Database schema
└── migrations/          # Database migrations
```

## Features

- Complete CRUD operations for loan management
- Input validation with class-validator
- Swagger/OpenAPI documentation
- PostgreSQL database with Prisma ORM
- Docker containerization for database
- TypeScript support throughout
- Error handling and validation
- Date range and status filtering
- Production-ready configuration

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/db` |
| `PORT` | Application port | `3000` |

## Docker Services

The included Docker Compose file provides:

- **PostgreSQL 15**: Main database server
- **pgAdmin 4**: Web-based database administration

Default credentials:
- **Database**: loans_user / loans_password
- **pgAdmin**: admin@admin.com / admin

## License

MIT License - see LICENSE file for details.
