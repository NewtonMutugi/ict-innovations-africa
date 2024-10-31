import { Event } from "@/types/event";
import { EventImage } from "@/types/event";
import Image from "next/image";

interface EventImagesProps {
  eventImages: EventImage[];
}

const EventImages: React.FC<EventImagesProps> = ({ eventImages }) => {
  if (!eventImages || !Array.isArray(eventImages)) {
    return null;
  }

  return (
    <>
      {eventImages.map((eventImage, index) => (
        // <EventImage key={index} {...eventImage} />
        <>
          <div
            className="wow fadeInUp w-1/2  bg-primary bg-opacity-10 p-5 text-primary"
            data-wow-delay=".15s"
            key={index}
          >
            <div className="mb-10 flex h-full w-full items-center justify-center ">
              <Image
                src={eventImage.image}
                alt={eventImage.imageDescription}
                width={800}
                height={500}
                layout="responsive"
                className="rounded-md"
              />
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {eventImage.imageTitle}
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              {eventImage.imageDescription}
            </p>
          </div>
        </>
      ))}
    </>
  );
};

export default EventImages;
