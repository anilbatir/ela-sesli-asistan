-- CreateTable
CREATE TABLE "ReservationRequest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "guestName" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "checkIn" DATETIME,
    "checkOut" DATETIME,
    "guestCount" INTEGER,
    "roomType" TEXT,
    "notes" TEXT,
    "transcript" TEXT,
    "status" TEXT NOT NULL DEFAULT 'YENI',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
