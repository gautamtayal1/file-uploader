/*
  Warnings:

  - Added the required column `file_url` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "file_url" TEXT NOT NULL,
ALTER COLUMN "folder_id" DROP NOT NULL;
