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
import { OrganizationProfile } from "@/app/components/forms/organization-profile-form";

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
        <OrganizationProfile />
      </DashboardLayout>
    </>
  );
};

export default Page;
