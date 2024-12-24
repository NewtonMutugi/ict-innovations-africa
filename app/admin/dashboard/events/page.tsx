"use client";
import React, { useState } from "react";
import AllEventsPage from "./AllEventsPage";
import useAuth from "../../UseAuth";
import Loading from "../loading";

const SamplePage = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Loading />; // or a loading spinner
  }
  return <AllEventsPage />;
};

export default SamplePage;
