"use client";

import React from "react";
import { DashboardShell } from "@/app/components/shell";
import { DashboardHeader } from "@/app/components/header";
import { Button } from "@/app/components/ui/button";
import { Icons } from "@/app/components/icons";

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

type VisaApplicationType =
  RouterOutputs["visaApplication"]["getVisaApplications"][number];

export function VisaApplicationTable({
  items,
  admin = false,
}: {
  items: VisaApplicationType[];
  admin?: boolean;
}) {
  return (
    <Table>
      <TableCaption>A list of all available bids.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Visiting Country</TableHead>
          <TableHead>Entry</TableHead>
          <TableHead>Exit</TableHead>
          <TableHead>Submitted On</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items?.map(
          ({ country, entryDate, exitDate, status, createdAt, id }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{country}</TableCell>
              <TableCell>{formatDate(entryDate)}</TableCell>
              <TableCell>{formatDate(exitDate)}</TableCell>
              <TableCell>{formatDate(createdAt)}</TableCell>
              <TableCell>{status}</TableCell>
              <TableCell className="gap-1 text-right">
                <Link href={`/visaapplication/${id}`} className="mr-2">
                  <Button className="rounded-full">
                    <Icons.info className="h-4 w-4" />
                  </Button>
                </Link>

                {admin && (
                  <Button className="rounded-full">
                    <Icons.check className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
}

export default function UserProfilePage() {
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
        <DashboardShell>
          <DashboardHeader
            heading="Organizations"
            text="Unlock Seamless Recurring Payments with Ease"
          >
            <Link href="/dashboard/user/visa/apply">
              <Button variant="outline">
                <Icons.edit className="mr-2 h-4 w-4" />
                New Visa Application
              </Button>
            </Link>
          </DashboardHeader>
        </DashboardShell>

        {/* <VisaApplicationTable /> */}
      </DashboardLayout>
    </>
  );
}
