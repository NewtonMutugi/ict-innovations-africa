import React from "react";
import SignupPage from "./SignupPage";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Sign In | ICT Innovations Admin Dashboard",
  description: "Signin page",
};

const page = () => {
  return (
    <div>
      <SignupPage />
    </div>
  );
};

export default page;
