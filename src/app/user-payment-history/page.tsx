"use client";

import React from "react";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/user-dashboard";
import { UserPaymentHistory } from "@/app/components/ui/user-payment-history";

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
        <UserPaymentHistory />
      </DashboardLayout>
    </>
  );
};

export default page;
