"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "@/app/components/ui/org-signin";
import Authentication from "../components/forms/Authentication";
import { SignInRequest, SignInResponse } from "@/app/utils/authapi";

export default function AuthenticationPage() {
  return (
    <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Authentication />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">
              Log into the organization account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to log into your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
