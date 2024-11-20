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
  {
    id: 2,
    title:
      "Launch of the Africa Centre of Competence for Digital & AI Skilling Project",
    paragraph:
      "The Africa Centre for Digital and AI Skilling, inaugurated on October 11, 2024, launches December 6 to enhance digital skills and public service innovation. Stay tuned for more!",
    image: "/images/events/AfricaCentreOfCompetenceForDigital&AISkilling.jpeg",
    venue: {
      name: "The Kenya School of Governmen Nairobi, Kenya",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    type: "Physical",
    tags: [
      "AfricaDigitalCenter",
      "AfricaCenterforCompetence",
      "AiforAfrica",
      "DigitalTransformation",
      "AISkilling",
      "AfricaDigitalFuture",
      "NuruTrust",
    ],
    eventDate: "6th December 2024",
    description:
      "The Africa Centre for Digital and Artificial Intelligence (AI) Skilling, officially inaugurated on October 11, 2024 at the Kenya School of Government in Nairobi is scheduled to be launched on December 6, focusing on enhancing digital competencies and service delivery. The project aims to foster innovation and improve public service efficiency through digital transformation. For more updates on this impactful initiative, <a href='https://drive.google.com/file/d/1cAr2XAZViJ6XzNyifvSPjg7CiycnLzae/view?usp=drive_link' class='text-primary dark:text-white'>listen to our part one of the deep dive<a/>.",
    eventImages: [
      {
        image:
          "/images/events/AfricaCentreOfCompetenceForDigital&AISkilling.jpeg",

        imageTitle: "Enhancing Learning with AI",
        imageDescription:
          "Streamline your studies with AI tools that make content accessible, engaging, and easy to manage.",
      },
    ],
    registrationLink: "https://fb.watch/vZxtGqlNBG/",
  },
];
export default eventData;
