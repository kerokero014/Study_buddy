// src/app/api/decks/[id]/route.ts

import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma/client';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await prisma.deck.delete({
      where: { id: parseInt(id, 10) },
    });
    return NextResponse.json({ message: 'Deck deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting deck:', error);
    return NextResponse.json({ error: 'Failed to delete deck' }, { status: 500 });
  }
}
