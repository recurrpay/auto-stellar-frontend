"use client";

import React from "react";
import OrgDashboard from "@/app/components/ui/dashboard";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";

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
        <OrgDashboard />
      </DashboardLayout>
    </>
  );
};

export default page;
