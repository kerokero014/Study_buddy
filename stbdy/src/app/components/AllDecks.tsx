"use client";
import { useEffect, useState } from "react";
import prisma from "../../../prisma/client";

export default async function AllDecks() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-slate-900">
        All Decks
      </h1>
    </div>
  );
}
