"use client";

import React, { useState } from "react";
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
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/app/lib/utils";
import { Calendar } from "@/app/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";
import { formatDate } from "../lib/utils";
import { toast } from "../components/ui/toast";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Page = () => {
  const [date, setDate] = React.useState<Date>();

  const [userInputs, setUserInputs] = useState([
    { email: "", amount: "", token: "XLM" },
  ]);

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
        <div className="flex gap-[115px]">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "m-[26px] w-[240px] justify-start text-left font-normal",

                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span>Pick a date for paying</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="pt-[36px]">
            <RadioGroup defaultValue="comfortable" className="flex flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">One Time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Recurring Pay</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        {userInputs.map((input, index) => (
          <div key={index} className="m-6 flex gap-5">
            <Input
              className="w-[30rem]"
              placeholder="Enter user email"
              value={input.email}
              onChange={(e) =>
                handleInputChange(index, "email", e.target.value)
              }
            />
            <Input
              className="w-[30rem]"
              placeholder="Enter Amount Payable"
              value={input.amount}
              onChange={(e) =>
                handleInputChange(index, "amount", e.target.value)
              }
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Token to Transfer</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Tokens</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={input.token}
                  onValueChange={(value) =>
                    handleInputChange(index, "token", value)
                  }
                >
                  <DropdownMenuRadioItem value="XLM">XLM</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="USDC">
                    USDC
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="USDT">
                    USDT
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={handleAddClick} className="">
              <Icons.add />
            </Button>
          </div>
        ))}
        <Button className="">Create Payroll</Button>
      </DashboardLayout>
    </>
  );
};

export default Page;
