"use client";

import Link from "next/link";
import freighterApi from "@stellar/freighter-api";
import Form from "../app/components/forms/user";
import { ContainerScroll } from "@/app/components/container-scroll";

export default function HomePage() {
  async function connect() {
    const isConnected = await freighterApi.isConnected();

    // if (isConnected) return;

    const isAllowed = await freighterApi.setAllowed();

    if (!isAllowed) return;

    const publicKey = await freighterApi.getPublicKey();
    console.log(publicKey);
  }

  const titleComponent = (
    <h1 className="text-4xl font-bold">Welcome to the Stellar Wallet</h1>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <ContainerScroll titleComponent={titleComponent}>
        <button onClick={connect} className="rounded bg-blue-500 px-4 py-2">
          Connect Wallet
        </button>
        <Form />
      </ContainerScroll>
    </main>
  );
}
