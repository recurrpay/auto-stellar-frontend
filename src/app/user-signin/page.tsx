"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import Authentication from "../components/forms/Authentication";
import Connect from "../components/ui/Connect";

export default function AuthenticationPage() {
  const [stellarAccountId, setStellarAccountId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    async function checkSignIn() {
      if (!stellarAccountId) return;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER}/auth/user/signin`,
        {
          authType: "USER_SIGNIN",
          stellarAccountId: stellarAccountId,
          x: "x",
          y: "y",
        },
      );
      localStorage.setItem("user-token", response.data.access_token);
      console.log(response);
      router.push("/user-dashboard");
    }
    checkSignIn();
  }, [stellarAccountId]);

  return (
    <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Authentication />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Connect
            stellarAccountId={stellarAccountId}
            setStellarAccountId={setStellarAccountId}
          />
        </div>
      </div>
    </div>
  );
}
