type Tag = {
  id?: number;
  tagName?: string;
};

export type RemEventImage = {
  imageUrl?: string;
  imageTitle?: string;
  imageDescription?: string;
};

export type RemEvent = {
  id?: number;
  title?: string;
  paragraph?: string;
  image?: string;
  venue?: string;
  type?: string;
  tags?: Tag[];
  description?: string;
  eventDate?: string;
  eventImages?: RemEventImage[];
  registrationLink?: string;
};
