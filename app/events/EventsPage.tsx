"use client";
import SectionTitle from "@/components/Common/SectionTitle";
import SingleEvent from "@/components/Events/SingleEvent";
import { RemEvent } from "@/types/remEvent";
import React, { useEffect, useState } from "react";
import { BACKEND_URL } from "../constants";

const EventsPage = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/events`);
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      {/* <Breadcrumb
        pageName="Events"
        description="Here are some of our latest upcoming events and engagements. This would be a perfect opportunity to learn more about what we do and what we are all about."
      /> */}
      <section className="pb-[120px] pt-[120px]">
        <SectionTitle
          title="Our Latest Events"
          paragraph="Here are some of our latest upcoming events and engagements. This would be a perfect opportunity to learn more about what we do and what we are all about."
          center
          buttonText="Register Interest"
          buttonTextLink="https://forms.gle/gkxDxfg6RWreZBncA"
        />
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {eventData.map((event) => (
              <div
                key={event.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleEvent event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
