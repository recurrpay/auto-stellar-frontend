"use client";
import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import DashboardLayout from "@/app/components/layout/dashboard-layout";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserInput {
  email: string;
  exists: boolean; // Added exists property to UserInput interface
  name?: string; // Optional name property
}

const Page: React.FC = () => {
  const [userInputs, setUserInputs] = useState<UserInput[]>([
    { email: "", exists: false },
  ]);
  const [formData, setFormData] = useState({
    email: "",
  });
  console.log("data", formData.email);
  const API_URL = "http://localhost:8000";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckClick = async (index: number) => {
    const { email } = userInputs[index];
    try {
      const response = await axios.get(`${API_URL}/user/email/${email}`);
      console.log("Update user response:", response.data);
      setUserInputs(
        userInputs.map((userInput, i) =>
          i === index
            ? { ...userInput, exists: true, name: response.data.name }
            : userInput,
        ),
      );
    } catch (error) {
      console.error("Update user error:", error);
      throw error;
    }
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
        {userInputs.map((input, index) => (
          <div key={index} className="m-6 flex flex-col gap-5">
            <div className="flex gap-5">
              <Input
                placeholder="Enter user email"
                value={input.email}
                onChange={(e) => handleChange(index, "email", e.target.value)}
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
                      <Button>Add User</Button>
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
