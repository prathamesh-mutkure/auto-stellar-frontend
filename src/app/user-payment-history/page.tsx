"use client";

import React from "react";
import { Chart } from "@/app/components/ui/chart";
import { SmallChart } from "@/app/components/ui/smallchart";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/user-dashboard";
import { UserPayment } from "@/app/components/ui/user-payment-history";

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
        <UserPayment />
      </DashboardLayout>
    </>
  );
};

export default page;