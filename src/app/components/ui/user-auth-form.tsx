"use client";

import * as React from "react";
import axios from "axios";

import { cn } from "@/app/lib/utils";
import { Icons } from "@/app/components/icons";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import ConnectButton from "./connect_wallet";
import Connect from "./Connect";
import { useRouter } from "next/navigation";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [stellarAccountId, setStellarAccountId] = React.useState<string>("");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    wallet: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:8000/auth/user/signup`,
        {
          authType: "USER_SIGNUP",
          email: formData.email,
          name: formData.name,
          x: "x",
          y: "y",
          stellarAccountId: stellarAccountId,
        },
      );
      localStorage.setItem("user-token", response.data.access_token);
      console.log(response); // Handle the response as needed
      router.push("/user-dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-6">
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your Name"
              type="text"
              required
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              required
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-4">
            <Label className="text-black" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your Password"
              type="password"
              required
              autoCapitalize="none"
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <div className="grid gap-4">
              <Label className="mb-2 text-black" htmlFor="wallet">
                Wallet Address
              </Label>
            </div>
            <div>
              {/* <ConnectButton /> */}
              <Connect
                stellarAccountId={stellarAccountId}
                setStellarAccountId={setStellarAccountId}
              />
            </div>
          </div>
          <a
            href="/user-signin"
            className="text-sm text-muted-foreground hover:text-sky-600"
          >
            Sign in instead?
          </a>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
