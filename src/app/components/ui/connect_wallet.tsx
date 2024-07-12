"use client";
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
import { Button } from "./button";

export default function ConnectButton() {
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
    <main className="bg-gradient-to-btext-white flex flex-col items-center justify-center">
      <Button onClick={openModal}>Connect Wallet</Button>
    </main>
  );
}
