"use client";

import React from "react";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";
import { DataTable } from "@/app/components/ui/depositTable";
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
        <DataTable />
      </DashboardLayout>
    </>
  );
};

export default page;
