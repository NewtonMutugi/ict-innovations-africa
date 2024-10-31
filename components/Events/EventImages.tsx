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
    <div className="-mx-4 mb-10 flex flex-wrap">
      {eventImages.map((eventImage, index) => (
        <div
          key={index}
          className="wow fadeInUp mb-8 w-full px-4 sm:w-1/2 lg:w-1/2"
          data-wow-delay=".15s"
        >
          <div className="relative mb-6 h-64 w-full">
            <Image
              src={eventImage.image}
              alt={eventImage.imageDescription}
              fill
              className="rounded-md object-cover"
            />
          </div>
          <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {eventImage.imageTitle}
          </h3>
          <p className="text-base font-medium leading-relaxed text-body-color">
            {eventImage.imageDescription}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EventImages;
