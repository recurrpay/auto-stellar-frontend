"use client";

import Link from "next/link";
import freighterApi from "@stellar/freighter-api";
import Form from "../app/components/forms/user";
import {
  StellarWalletsKit,
  WalletNetwork,
  ISupportedWallet,
  XBULL_ID,
} from "@creit.tech/stellar-wallets-kit";
import {
  xBullModule,
  FreighterModule,
  AlbedoModule,
} from "@creit.tech/stellar-wallets-kit/";

export default function Connutton() {
  const kit = new StellarWalletsKit({
    selectedWalletId: XBULL_ID,
    network: WalletNetwork.PUBLIC,
    modules: [new xBullModule(), new FreighterModule(), new AlbedoModule()],
  });

  const handleWalletSelection = async (option: ISupportedWallet) => {
    kit.setWallet(option.id);
    const publicKey = await kit.getPublicKey();
    // Do something else with the publicKey
  };

  const openModal = () => {
    kit.openModal({
      onWalletSelected: handleWalletSelection,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <button onClick={openModal} className="rounded bg-blue-500 px-4 py-2">
        Connect Wallet
      </button>
    </main>
  );
}
