// pages/api/flashcards.ts

import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { question, answer, deckId } = req.body;

    try {
      const flashcard = await prisma.flashcard.create({
        data: {
          question,
          answer,
          deckId,
        },
      });
      res.status(200).json(flashcard);
    } catch (error) {
      res.status(500).json({ error: "Failed to create flashcard" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
