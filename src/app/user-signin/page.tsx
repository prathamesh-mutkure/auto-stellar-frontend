"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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
import ReccurPay from "../../../public/recurrPay.svg";
import Logo from "../../../public/pm.svg";

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
    router.push("/user-dashboard"); // Redirect to user dashboard after wallet is connected
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
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src={Logo} alt="Logo" className="mr-2 h-6 w-6" />
          Recurr Pay
        </div>
        <Image
          src={ReccurPay}
          alt="Recurr Pay"
          className="fixed left-[8rem] top-[9rem] mr-2 h-[40rem] w-[40rem]"
        />
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Button onClick={openModal}>Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
}