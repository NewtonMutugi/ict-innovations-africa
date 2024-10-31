type Venue = {
  name: string;
  image: string;
  designation: string;
};

export type EventImage = {
  image?: string;
  imageTitle?: string;
  imageDescription?: string;
};

export type Event = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  venue: Venue;
  type: string;
  tags: string[];
  description: string;
  eventDate: string;
  eventImages: EventImage[];
  registrationLink?: string;
};
