"use client";

import Link from "next/link";
import router from "next/router";
import React from "react";

const LoginSignUpButton = ({ location, label }) => {
  return (
    <Link
      className="m-5 flex w-1/2 items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
      href={location}
    >
      {label}
    </Link>
  );
};

export default LoginSignUpButton;
