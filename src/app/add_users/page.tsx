"use client";

import React, { useState, useEffect } from "react";
import { DashboardShell } from "@/app/components/shell";
import { DashboardHeader } from "@/app/components/header";
import { RocketIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { Icons } from "@/app/components/icons";
import { Chart } from "@/app/components/ui/chart";
import { SmallChart } from "@/app/components/ui/smallchart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";
import { formatDate } from "../lib/utils";
import { toast } from "../components/ui/toast";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

const Page = () => {
  const [userInputs, setUserInputs] = useState([
    { email: "", amount: "", token: "XLM" },
  ]);
  const [visible, setVisible] = useState(false);

  const handleAddClick = () => {
    setUserInputs([
      ...userInputs,
      {
        email: "",
        amount: "",
        token: "XLM",
      },
    ]);
  };

  const handleInputChange = (index: number, key: string, value: string) => {
    setUserInputs(
      userInputs.map((userInput, i) =>
        i === index ? { ...userInput, [key]: value } : userInput,
      ),
    );
  };

  const handleCheckClick = (index: number) => {
    // Simulate checking the email existence
    // Replace this with actual API call logic
    const emailExists = true; // Replace with actual check

    setUserInputs(
      userInputs.map((userInput, i) =>
        i === index
          ? {
              ...userInput,
              exists: emailExists,
              name: emailExists ? "John Doe" : "",
            }
          : userInput,
      ),
    );
  };

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <DashboardLayout
        type="user"
        heading="Visa Applications"
        text="Find all your visa application here"
        buttonLabel="New Visa Application"
      >
        {userInputs.map((input, index) => (
          <div key={index} className="m-6 flex flex-col gap-5">
            <div className="flex gap-5">
              <Input
                className=""
                placeholder="Enter user email"
                value={input.email}
                onChange={(e) =>
                  handleInputChange(index, "email", e.target.value)
                }
              />
              <Button onClick={() => handleCheckClick(index)}>Check</Button>
            </div>
            <div>
              {input.exists && (
                <Card className="">
                  <CardHeader>
                    <CardTitle>User Details</CardTitle>
                    <CardDescription>
                      This user exists in the system
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <h6 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        <span>
                          {" "}
                          <CardDescription>
                            Email: {input.email}
                          </CardDescription>
                        </span>
                      </h6>
                      <h6 className="scroll-m-20 text-xl font-semibold tracking-tight">
                        <span>
                          {" "}
                          <CardDescription>Name: {input.name}</CardDescription>
                        </span>
                      </h6>
                      <Button className="">Add User</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </DashboardLayout>
    </>
  );
};

export default Page;
