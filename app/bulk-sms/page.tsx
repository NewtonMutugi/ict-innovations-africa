import React from "react";
import BulkSms from "./BulkSms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk SMS | ICT Innovations Africa",
  description:
    "We offer versatile Bulk SMS applications across various sectors. Beyond school communication, marketing, and notification alerts, our Bulk SMS services are effectively used for:",
};

const BulkSmsPage = () => {
  return <BulkSms />;
};

export default BulkSmsPage;
