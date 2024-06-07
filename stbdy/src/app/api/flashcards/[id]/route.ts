// src/app/api/flashcards/[id]/route.ts

import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await prisma.flashcard.delete({
      where: { id: parseInt(id, 10) },
    });
    return NextResponse.json(
      { message: "Flashcard deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting flashcard:", error);
    return NextResponse.json(
      { error: "Failed to delete flashcard" },
      { status: 500 }
    );
  }
}
