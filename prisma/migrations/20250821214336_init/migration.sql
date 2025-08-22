-- CreateTable
CREATE TABLE "public"."loans" (
    "id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "to" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "interest" DECIMAL(5,2),
    "status" TEXT NOT NULL DEFAULT 'active',
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);
