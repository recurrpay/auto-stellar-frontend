"use client";
import ConnectButton from "./components/ui/connect_wallet";

import { MainNav } from "./components/user-nav";
import { Search } from "./components/ui/search";
import { UserNav } from "./components/ui/nav";
import Landing from "./components/ui/landing_text";
import { Button } from "./components/ui/button";
import { Globe } from "./components/Globe";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="tems-center relative flex justify-center">
        <div className="absolute inset-0 -z-10 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="mx-auto flex flex-col gap-10 p-6 text-center md:flex-row md:space-x-6 md:text-left">
          <div className="max-w-2xl">
            {/* <h1 className="mb-4 mt-40 text-6xl font-bold"></h1> */}
            <Landing />
            <p className="mb-6 text-lg">
              Easiest way to manage payroll and recurring subscriptions and
              seamlessly do cross border payments with the poweer of Stellar.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="flex h-[600px] w-[600px] justify-center md:mt-0 md:justify-start">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
}
