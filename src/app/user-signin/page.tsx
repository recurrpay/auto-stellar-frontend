"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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
import { Button } from "@/app/components/ui/button";
import Authentication from "../components/forms/Authentication";

// Mock function to check wallet connection status
// Replace this with your actual logic to check wallet connection
const checkWalletConnection = async () => {
  // Replace with your actual wallet connection check
  // This is just a mock implementation
  // For example, checking local storage, calling an API, etc.
  const isConnected = localStorage.getItem("walletConnected") === "true";
  return isConnected;
};

export default function AuthenticationPage() {
  const kit = new StellarWalletsKit({
    selectedWalletId: XBULL_ID,
    network: WalletNetwork.PUBLIC,
    modules: [new xBullModule(), new FreighterModule(), new AlbedoModule()],
  });

  const handleWalletSelection = async (option: ISupportedWallet) => {
    kit.setWallet(option.id);
    const publicKey = await kit.getPublicKey();
    // Do something else with the publicKey
    // Set wallet connection status in local storage
    localStorage.setItem("walletConnected", "true");
    localStorage.setItem("walletPublicKey", publicKey); // Store public key for later use
    setIsConnected(true);

    // Sign in the user with the new API
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/auth/user/signin`,
        {
          authType: "WALLET_SIGNIN",
          stellarAccountId: publicKey,
          x: "x",
          y: "y",
        },
      );
      localStorage.setItem("user-token", response.data.access_token);

      console.log(response.data); // Handle the response as needed
      router.push("/user-dashboard"); // Redirect to user dashboard after wallet is connected
    } catch (error) {
      console.error("Error signing in:", error);
      // Handle error (e.g., show a notification to the user)
    }
  };

  const openModal = () => {
    kit.openModal({
      onWalletSelected: handleWalletSelection,
    });
  };

  const router = useRouter();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      const connectionStatus = await checkWalletConnection();
      setIsConnected(connectionStatus);
      if (connectionStatus) {
        router.push("/user-dashboard");
      }
    };

    checkConnection();
  }, [router]);

  return (
    <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Authentication />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Button onClick={openModal}>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
}
