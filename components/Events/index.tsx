import SectionTitle from "../Common/SectionTitle";
import SingleEvent from "./SingleEvent";
import eventData from "./eventData";

const Events = () => {
  console.log(eventData);
  return (
    <section
      id="Event"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Events"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {eventData.map((event) => (
            <div key={event.id} className="w-full">
              <SingleEvent event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
