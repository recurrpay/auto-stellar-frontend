"use client";

import React, { useState, useEffect } from "react";
import {
  isConnected,
  isAllowed,
  setAllowed,
  requestAccess,
  getPublicKey,
} from "@stellar/freighter-api";
import { Button } from "@/components/ui/button"; // Ensure this path is correct

interface ConnectProps {
  formData: any;
  handleKeyChange: (key: string) => void;
}

const Connect: React.FC<ConnectProps> = ({ formData, handleKeyChange }) => {
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
            handleKeyChange(key);
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
        handleKeyChange(key);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {isFreighterInstalled ? (
        formData?.stellarAccountId ? (
          <div>
            <p className="flex items-center justify-center gap-4">
              {formData.stellarAccountId.substring(0, 20) +
                "...." +
                formData.stellarAccountId.substring(36, 56)}
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
