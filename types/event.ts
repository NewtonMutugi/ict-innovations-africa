type Venue = {
  name: string;
  image: string;
  designation: string;
};

type EventDetails = {
  description: string;
  image?: string;
  imageDescription?: string;
  image2?: string;
  image2Description?: string;
};

export type Event = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  venue: Venue;
  tags: string[];
  eventDate: string;
  eventDetails: EventDetails;
  registrationLink?: string;
};
