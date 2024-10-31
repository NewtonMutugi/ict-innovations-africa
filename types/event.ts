type Venue = {
  name: string;
  image: string;
  designation: string;
};

export type Event = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  venue: Venue;
  tags: string[];
  eventDate: string;
};
