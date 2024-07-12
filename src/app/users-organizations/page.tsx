"use client";

import React, { useState, useEffect } from "react";
import { Chart } from "@/app/components/ui/chart";
import { SmallChart } from "@/app/components/ui/smallchart";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/user-dashboard";
import { OrganizationTable } from "@/app/components/ui/orgTable";

const Page = () => {
  const [organisation, setOrganisation] = useState([]);

  useEffect(() => {
    const fetchOrganisation = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/organisation`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("user-token")}`,
          },
        },
      );
      const data = await response.json();
      setOrganisation(data);
    };

    fetchOrganisation();
    console.log("organisation");
    console.log(organisation);
  }, []);
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
        <OrganizationTable data={organisation} />
      </DashboardLayout>
    </>
  );
};

export default Page;
