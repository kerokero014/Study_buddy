// pages/api/flashcards.ts
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export async function POST(req: Request) {
  const body = await req.json();
  const { question, answer, deckId } = body;

  if (!question || !answer || !deckId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const flashcard = await prisma.flashcard.create({
      data: {
        question,
        answer,
        deckId: parseInt(deckId, 10),
      },
    });
    return NextResponse.json(flashcard, { status: 201 });
  } catch (error) {
    console.error("Error creating flashcard:", error);
    return NextResponse.json(
      { error: "Failed to create flashcard" },
      { status: 500 }
    );
  }
}
