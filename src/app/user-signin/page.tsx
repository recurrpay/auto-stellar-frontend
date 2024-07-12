import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/app/lib/utils";
import { buttonVariants } from "@/app/components/ui/button";
import { UserAuthForm } from "@/app/components/ui/user-signin";
import ReccurPay from "../../../public/recurrPay.svg";
import Logo from "../../../public/pm.svg";
import ConnectButton from "../components/ui/connect_wallet";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
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
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
