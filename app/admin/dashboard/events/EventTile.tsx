"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RemEvent } from "@/types/remEvent";
import { truncateText } from "@/app/utils/trucateText";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import { BACKEND_URL } from "@/app/constants";

const EventTitle = ({ event }: { event: RemEvent }) => {
  const router = useRouter();
  console.log(event);
  if (!event) {
    return null;
  }
  const theme = useTheme();
  const eventImages = event.eventImages;
  console.log(eventImages);

  const handleEventDetailsClick = (eventId: number) => {
    router.push(`/event-details/${eventId}`); // Navigate to event details page
  };

  // const { id, title, image, paragraph, venue, type, eventDate } = event;
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

  const handleDeleteEvent = async (eventId: number) => {
    try {
      const res = await fetch(`http://localhost:8000/api/event/${eventId}`, {
        method: "DELETE",
      });
      if (res.status === 200) {
        router.refresh();
        Swal.fire({
          title: "Success",
          text: "Event Deleted successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "An error occurred",
        icon: "error",
      });
    }
  };
  const mainImage = BACKEND_URL + eventImages[0].imageUrl;
  return (
    <Box
      className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-gray-light duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
      data-wow-delay=".1s"
      sx={{
        m: 2,
        // p: 2,
        backgroundColor: theme.palette.background.default,
        borderRadius: "8px",
        boxShadow: theme.shadows[4],
      }}
    >
      <div className="relative block aspect-[37/22] w-full">
        <span
          className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-red-600 px-4 py-2 text-sm font-semibold capitalize text-white hover:cursor-pointer"
          onClick={() => handleDeleteEvent(event.id)}
        >
          {/* {event.type} */}
          <DeleteForeverOutlinedIcon />
        </span>

        <Image
          src={mainImage}
          alt={eventImages[0].imageTitle}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <p
          onClick={() => handleEventDetailsClick(event.id)}
          className="mb-4 block cursor-pointer text-lg font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
        >
          {/* Delete icon */}
          {event.title}
        </p>

        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {truncateText(event.paragraph, 15)}
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Venue:
              </h4>
              <p className="text-xs text-body-color">{event.venue}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date:
            </h4>
            <p className="text-xs text-body-color">
              {formatDate(event.eventDate)}
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        component={Link}
        href={`/event-details/${event.id}`}
        disableElevation
        color="primary"
        sx={{
          marginLeft: "20px",
          marginBottom: "20px",
        }}
      >
        View Event
      </Button>
      {/* </div> */}
    </Box>
  );
};

export default EventTitle;