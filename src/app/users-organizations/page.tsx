"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/user-dashboard";
import { OrganizationTable } from "@/app/components/ui/orgTable";
import axios from "axios";

const Page = () => {
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
        <OrganizationTable />
      </DashboardLayout>
    </>
  );
};

export default Page;
