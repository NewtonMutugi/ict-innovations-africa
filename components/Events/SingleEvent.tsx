"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/types/event";

const SingleEvent = ({ event }: { event: Event }) => {
  const router = useRouter();

  if (!event) {
    return null; // Handle the case where event is undefined
  }

  const handleEventDetailsClick = (eventId: number) => {
    router.push(`/event-details/${eventId}`); // Navigate to event details page
  };

  const { id, title, image, paragraph, venue, type, eventDate } = event;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day}th ${month} ${year}`;
  };
  return (
    <div
      className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
      data-wow-delay=".1s"
    >
      <Link
        href={`/event-details/${id}`}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {type}
        </span>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <p
            onClick={() => handleEventDetailsClick(id)}
            className="mb-4 block cursor-pointer text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </p>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Venue:
              </h4>
              <p className="text-xs text-body-color">{venue.name}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date:
            </h4>
            <p className="text-xs text-body-color">{formatDate(eventDate)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
