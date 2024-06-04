"use client";
import { useEffect, useState } from "react";
import prisma from "../../../prisma/client";

export default async function AllDecks() {
  const allDecks = await prisma.user.findMany();
  console.log(allDecks);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-slate-900">
        All Decks
      </h1>
    </div>
  );
}
