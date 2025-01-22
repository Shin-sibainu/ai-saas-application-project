import { NextResponse } from "next/server";
import { prisma } from "./prisma";

export async function createUser(clerkId: string, email: string) {
  try {
    const user = await prisma.user.create({
      data: {
        clerkId: clerkId,
        email: email,
        credits: 5,
        subscriptionStatus: "FREE",
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Failed to create User:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function updateUser(clerkId: string, email: string) {
  try {
    const user = await prisma.user.update({
      where: { clerkId: clerkId },
      data: {
        email: email,
      },
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Failed to create User:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function deleteUser(clerkId: string) {
  try {
    const user = await prisma.$transaction(async (tx) => {
      await tx.subscription.deleteMany({
        where: {
          user: {
            clerkId: clerkId,
          },
        },
      });

      const user = await tx.user.delete({
        where: { clerkId: clerkId },
      });

      return user;
    });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Failed to create User:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
