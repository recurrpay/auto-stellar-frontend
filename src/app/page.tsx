"use client";

import Link from "next/link";
import freighterApi from "@stellar/freighter-api";
import Form from "../app/components/forms/user";

export default function HomePage() {
  async function connect() {
    const isConnected = await freighterApi.isConnected();

    // if (isConnected) return;

    const isAllowed = await freighterApi.setAllowed();

    if (!isAllowed) return;

    const publicKey = await freighterApi.getPublicKey();
    console.log(publicKey);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      hi
    </main>
  );
}
