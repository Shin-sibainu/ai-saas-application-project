import { connect } from "@tidbcloud/serverless";
import { PrismaTiDBCloud } from "@tidbcloud/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const connection = connect({ url: process.env.DATABASE_URL });
const adapter = new PrismaTiDBCloud(connection);
export const prisma = new PrismaClient({ adapter });
