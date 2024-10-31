import SingleEvent from "@/components/Events/SingleEvent";
import eventData from "@/components/Events/eventData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Page | Free Next.js Template for Startup and SaaS",
  description: "This is Event Page for Startup Nextjs Template",
  // other metadata
};

const Events = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events"
        description="Here are some of our latest upcoming and engagements"
      />

      <section className="pb-[120px] pt-[120px]">
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

export default Events;
