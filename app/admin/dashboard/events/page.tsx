"use client";
import { Typography } from "@mui/material";
import PageContainer from "@/app/admin/dashboard/components/container/PageContainer";
import EventTile from "./EventTile";

const SamplePage = async () => {
  const res = await fetch("http://localhost:8000/api/events");
  const events = await res.json();

  return (
    <PageContainer>
      <Typography variant="h1" sx={{ mb: 5 }}>
        All Events
      </Typography>
      {/* <EventTile event={events} /> */}
      <div className="-mx-4 flex flex-wrap justify-start">
        {events.length === 0 ? (
          <Typography variant="h2" sx={{ mb: 5 }}>
            No events available
          </Typography>
        ) : (
          events.map((event) => (
            <div
              key={event.id}
              className=" w-full px-4 py-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
            >
              <EventTile event={event} />
            </div>
          ))
        )}
      </div>
    </PageContainer>
  );
};

export default SamplePage;
