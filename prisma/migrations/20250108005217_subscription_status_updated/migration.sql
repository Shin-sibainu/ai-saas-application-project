/*
  Warnings:

  - The values [BASIC] on the enum `User_subscriptionStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `subscriptionStatus` ENUM('FREE', 'STATER', 'PRO', 'ENTERPRISE') NOT NULL DEFAULT 'FREE';
