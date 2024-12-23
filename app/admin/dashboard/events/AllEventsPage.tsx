"use client";
import React, { useEffect, useState } from "react";
import { Paper, Typography, useTheme } from "@mui/material";
import PageContainer from "@/app/admin/dashboard/components/container/PageContainer";
import EventTile from "./EventTile";
import useAuth from "../../UseAuth";
import { BACKEND_URL } from "@/app/constants";

const AllEventsPage = () => {
  const [events, setEvents] = useState([]);
  const theme = useTheme();

  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/events`);
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <PageContainer>
      <Paper
        elevation={3}
        sx={{
          padding: theme.spacing(3),
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        }}
      >
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
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <EventTile event={event} />
              </div>
            ))
          )}
        </div>
      </Paper>
    </PageContainer>
  );
};

export default AllEventsPage;
