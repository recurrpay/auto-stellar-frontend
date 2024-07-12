"use client";
import React, { useState, useEffect } from "react";
import {
  isConnected,
  isAllowed,
  setAllowed,
  requestAccess,
  getPublicKey,
} from "@stellar/freighter-api";
import { Button } from "@/components/ui/button";

interface ConnectProps {
  stellarAccountId: string;
  setStellarAccountId: React.Dispatch<React.SetStateAction<string>>;
}

const Connect: React.FC<ConnectProps> = ({
  stellarAccountId,
  setStellarAccountId,
}) => {
  const [isFreighterInstalled, setIsFreighterInstalled] =
    useState<boolean>(false);
  const [isAppAllowed, setIsAppAllowed] = useState<boolean>(false);
  const [publicKey, setPublicKey] = useState<string>("");

  useEffect(() => {
    const checkFreighter = async () => {
      try {
        const connected = await isConnected();
        setIsFreighterInstalled(connected);

        if (connected) {
          const allowed = await isAllowed();
          setIsAppAllowed(allowed);

          if (allowed) {
            const key = await getPublicKey();
            setPublicKey(key);
            setStellarAccountId(key);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    checkFreighter();
  }, []);

  const handleConnectWallet = async () => {
    try {
      if (!isAppAllowed) {
        const allowed = await setAllowed();
        setIsAppAllowed(allowed);
      }

      if (isAppAllowed) {
        const key = await requestAccess();
        setPublicKey(key);
        setStellarAccountId(key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isFreighterInstalled ? (
        publicKey ? (
          <div>
            <p className="flex items-center justify-center gap-4">
              {stellarAccountId.substring(0, 20) +
                "...." +
                stellarAccountId.substring(36, 56)}
              {/* <Button onClick={handleConnectWallet}>Change Wallet</Button> */}
            </p>
          </div>
        ) : (
          <Button onClick={handleConnectWallet}>Connect Wallet</Button>
        )
      ) : (
        <p>Please install the Freighter extension.</p>
      )}
    </div>
  );
};

export default Connect;
