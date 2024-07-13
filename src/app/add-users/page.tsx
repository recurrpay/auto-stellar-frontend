"use client";
import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "@/app/utils/apis";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserInput {
  email: string;
  exists: boolean;
  name?: string;
  exists: boolean;
  name?: string;
}

const Page: React.FC = () => {
  const [userInputs, setUserInputs] = useState<UserInput[]>([
    { email: "", exists: false },
  ]);
  const API_URL = "http://localhost:8000";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const { value } = e.target;
    const newInputs = [...userInputs];
    newInputs[index].email = value;
    setUserInputs(newInputs);
  };

  const handleCheckClick = async (index: number) => {
    const { email } = userInputs[index];
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER}/user/email/${email}`,
      );
      console.log("Update user response:", response.data);
      setUserInputs(
        userInputs.map((userInput, i) =>
          i === index
            ? { ...userInput, exists: true, name: response.data.Profile.name }
            : userInput,
        ),
      );
    } catch (error) {
      toast.error("User not listed");
      console.error("Update user error:", error);
    }
  };

  const handleAddUserClick = async (index: number) => {
    const { email } = userInputs[index];
    console.log(email);
    try {
      const response = await axiosInstance.patch(
        `http://localhost:8000/organization/user`,
        {
          userEmail: email,
        },
      );
      toast.success("User added successfully");

      console.log("Add user response:", response.data);
    } catch (error) {
      toast.error("Error adding user");
      console.error("Add user error:", error);
    }
  };

  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>
      <ToastContainer />
      <DashboardLayout
        type="user"
        heading="Visa Applications"
        text="Find all your visa application here"
        buttonLabel="New Visa Application"
      >
        {userInputs.map((input, index) => (
          <div key={index} className="m-6 flex flex-col gap-5">
            <div className="flex gap-5">
              <Input
                placeholder="Enter user email"
                value={input.email}
                onChange={(e) => handleChange(e, index)}
              />
              <Button onClick={() => handleCheckClick(index)}>Check</Button>
            </div>
            <div>
              {input.exists && (
                <Card>
                  <CardHeader>
                    <CardTitle>User Details</CardTitle>
                    <CardDescription>
                      This user exists in the system
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <h6 className="text-xl font-semibold">
                        <CardDescription>Email: {input.email}</CardDescription>
                      </h6>
                      {input.name && (
                        <h6 className="text-xl font-semibold">
                          <CardDescription>Name: {input.name}</CardDescription>
                        </h6>
                      )}
                      <Button onClick={() => handleAddUserClick(index)}>
                        Add User
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        ))}
      </DashboardLayout>
    </>
  );
};

export default Page;
