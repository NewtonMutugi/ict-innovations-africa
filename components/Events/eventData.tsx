import { Event } from "@/types/event";

const eventData: Event[] = [
  {
    id: 1,
    title: "Preparing the Youth for the Future",
    paragraph:
      "Join us in an insightful session designed to empower and guide young leaders on using technology and becoming early adopters.",
    image: "/images/events/monetize_ai.jpg",
    venue: {
      name: "Online",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    type: "online",
    tags: ["AI Monetization", "technology", "future"],
    eventDate: "To be Announced",
    description:
      "This session will equip participants with actionable strategies to navigate career path selection and cultivate life skills essential for professional and personal growth.\nParticipants will learn how to leverage AI for creating dynamic presentations, summarizing complex content, and extracting key insights from documents, including PDFs and YouTube videos. Discover how these tools can make learning more efficient and engaging.\nWe’ll also explore the monetization of AI, offering insights on how to capitalize on AI as early adopters, including creating visually stunning websites through AI-driven solutions.",
    eventImages: [
      {
        image: "/images/events/enhancinglearningwithAI.jpg",

        imageTitle: "Enhancing Learning with AI",
        imageDescription:
          "Streamline your studies with AI tools that make content accessible, engaging, and easy to manage.",
      },
      {
        image: "/images/events/monetize_ai.jpg",
        imageTitle: "Monetizing AI",
        imageDescription:
          "Discover how to create visually stunning websites through AI-driven solutions.",
      },
    ],
    registrationLink: "https://forms.gle/QwHoJ7adbv1vJzDk9",
  },
  // {
  //   id: 2,
  //   title: "9 simple ways to improve your design skills",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-02.jpg",
  //   author: {
  //     name: "Musharof Chy",
  //     image: "/images/blog/author-02.png",
  //     designation: "Content Writer",
  //   },
  //   tags: ["computer"],
  //   publishDate: "2025",
  // },
  // {
  //   id: 3,
  //   title: "Tips to quickly improve your coding speed.",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/blog/blog-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/blog/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default eventData;
