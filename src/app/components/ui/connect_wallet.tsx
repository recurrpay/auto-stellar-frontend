"use client";

import { Button } from "./button";
import {
  StellarWalletsKit,
  WalletNetwork,
  type ISupportedWallet,
  XBULL_ID,
  xBullModule,
  FreighterModule,
  AlbedoModule,
} from "@creit.tech/stellar-wallets-kit";
import * as StellarSdk from "@stellar/stellar-sdk";

export default function ConnectButton() {
  const kit = new StellarWalletsKit({
    selectedWalletId: XBULL_ID,
    network: WalletNetwork.TESTNET,
    modules: [new xBullModule(), new FreighterModule(), new AlbedoModule()],
  });

  const handleWalletSelection = async (option: ISupportedWallet) => {
    if (!option.isAvailable) {
      // TODO: Show error
      return;
    }

    kit.setWallet(option.id);

    const publicKey = await kit.getPublicKey();

    try {
      const server = new StellarSdk.Horizon.Server(
        "https://horizon-testnet.stellar.org",
      );

      // TODO: Check if account activated
      const account = await server.loadAccount(publicKey);

      // TODO: Put server wallet address in env
      const transaction = new StellarSdk.TransactionBuilder(account, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.TESTNET,
      })
        .addOperation(
          StellarSdk.Operation.payment({
            destination:
              "GAKK3J2FUPRA7JM3GVZWG7VUZGQ5FERXWXVNWHSZ2OIT57J3IR2B4WH2",
            asset: StellarSdk.Asset.native(),
            amount: "0.5",
          }),
        )
        .addMemo(StellarSdk.Memo.text("Deposite"))
        .setTimeout(60)
        .build();

      const { result: signedTxnXdr } = await kit.signTx({
        xdr: transaction.toXDR(),
        publicKeys: [publicKey],
        network: WalletNetwork.TESTNET,
      });

      const signedTxn = new StellarSdk.Transaction(
        signedTxnXdr,
        StellarSdk.Networks.TESTNET,
      );

      const txnResult = await server.submitTransaction(signedTxn, {
        skipMemoRequiredCheck: true,
      });

      // TODO: Pass txHash to the backend and verify data on-chain

      return txnResult.successful;
    } catch (error: any) {
      console.error(`Error depositing funds - ${error?.message}`);

      return false;
    }
  };

  const openModal = async () => {
    await kit.openModal({
      onWalletSelected: (option) => {
        void handleWalletSelection(option);
      },
    });
  };

  return (
    <main className="bg-gradient-to-btext-white flex flex-col items-center justify-center">
      <Button onClick={openModal}>Connect Wallet</Button>
    </main>
  );
}
