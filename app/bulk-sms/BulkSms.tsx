"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";
import bulkSmsData from "./bulkSmsData";
import SingleFeature from "@/components/Services/SingleServices";

const BulkSms = () => {
  const handleLearnClick = () => {
    window.open(
      "https://dstr.connectbind.com/rsms/client-login.php?lang=en",
      "_blank",
    );
  };
  return (
    <>
      <Breadcrumb pageName="" description="" />
      <section className="container pb-28 pt-20">
        <div className="container -mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-full">
            <SectionTitle
              title="Bulk SMS services for all your needs"
              paragraph="We offer versatile Bulk SMS applications across various sectors. Beyond school communication, marketing, and notification alerts, our Bulk SMS services are effectively used for:"
              mb="44px"
              center
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {bulkSmsData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
          <div className="my-6 mt-8 flex w-full items-center justify-center">
            <button
              className="dark:hadow-submit-dark items-center justify-center rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
              onClick={handleLearnClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BulkSms;
