"use client";

import React from "react";
import { DashboardShell } from "@/app/components/shell";
import { DashboardHeader } from "@/app/components/header";
import { Button } from "@/app/components/ui/button";
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

import Link from "next/link";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";
import { formatDate } from "../lib/utils";
import { toast } from "../components/ui/toast";
const page = () => {
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
        <Chart />
        <SmallChart />
      </DashboardLayout>
    </>
  );
};

export default page;
