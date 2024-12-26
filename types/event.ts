type Venue = {
  name: string;
  image: string;
  designation: string;
};

export type EventImage = {
  id: number;
  imageUrl?: string;
  imageTitle?: string;
  imageDescription?: string;
};

export type Tag = {
  id: number;
  tagName: string;
};

export type Event = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  venue: string;
  type: string;
  tags: Tag[];
  description: string;
  eventDate: string;
  eventImages: EventImage[];
  registrationLink?: string;
};
