import { Metadata } from "next";
import EventsPage from "./EventsPage";

export const metadata: Metadata = {
  title: "Events | ICT Innnovations Africa",
  description:
    "This is the event page of ICT Innovations Africa. Here you can find all the latest events and engagements that we are involved in.",
  // other metadata
};

const Events = () => {
  return <EventsPage />;
};

export default Events;
