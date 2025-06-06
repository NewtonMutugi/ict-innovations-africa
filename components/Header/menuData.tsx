import { Menu } from "@/types/menu";
import path from "path";

const menuData = [
  // {
  //   id: 0,
  //   title: "Products",
  //   // path: "#home",
  //   newTab: true,
  //   submenu: [
  //     {
  //       id: 1,
  //       title: "AI Website Generator",
  //       path: "https://webgenerator.ai",
  //       newTab: true,
  //     },
  //   ],
  // },
  {
    id: 1,
    title: "About Us",
    path: "/#about",
    newTab: false,
    submenu: [],
  },
  {
    id: 2,
    title: "Products and Services",
    // path: "/#services",
    newTab: true,
    submenu: [
      {
        id: 0,
        title: "Website Generator",
        path: "https://webgenerator.ai",
        newTab: true,
      },
      {
        id: 1,
        title: "Presentation Generator",
        path: "/presentation-generator",
        newTab: false,
      },
      {
        id: 2,
        title: "Web Hosting",
        path: "/#pricing",
        newTab: false,
      },
      {
        id: 3,
        title: "Bulk SMS",
        path: "/bulk-sms",
        newTab: false,
      },
      {
        id: 4,
        title: "Other Products & Services",
        path: "/#services",
        newTab: false,
      },
    ],
  },
  // {
  //   id: 4,
  //   title: "Gurantee",
  //   path: "/#about",
  //   newTab: false,
  // },
  {
    id: 5,
    title: "Hosting",
    path: "/#pricing",
    newTab: false,
  },
  {
    id: 6,
    title: "Testimonials",
    path: "/#testimonials",
    newTab: false,
  },
  {
    id: 7,
    title: "Events",
    path: "/events",
    newTab: false,
  },
  {
    id: 7,
    title: "Contact",
    path: "/#contact",
    newTab: false,
  },
];

export default menuData;
