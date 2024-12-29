// import { Metadata } from "next";
// import eventData from "@/components/Events/eventData";

// export async function generateMetadata({
//   params,
// }: {
//   params: { eventId: string };
// }): Promise<Metadata> {
//   const { eventId } = params;

//   // Fetch metadata for the event (replace with your API or logic)
//   // const event = await fetchEventDetails(eventId);

//   if (!event) {
//     return {
//       title: "Event Not Found",
//       description: "No details available for this event.",
//     };
//   }

//   return {
//     title: `${event.title} | ICT Innovations Africa`,
//     description: event.description,
//   };
// }

// async function fetchEventDetails(eventId: string) {
//   // Simulate API call or database query
//   const events = eventData;
//   return events.find((event) => event.id === Number(eventId));
// }

export default function EventDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
