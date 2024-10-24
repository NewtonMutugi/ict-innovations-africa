import { Menu } from "@/types/menu";

const menuData = [
  {
    id: 0,
    title: "Products",
    // path: "#home",
    newTab: true,
    submenu: [
      {
        id: 1,
        title: "AI Website Generator",
        path: "https://ramahconsultancy.com",
        newTab: true,
      },
    ],
  },
  {
    id: 1,
    title: "Mission",
    path: "/#mission",
    newTab: false,
  },
  {
    id: 2,
    title: "Features",
    path: "/#features",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Gurantee",
  //   path: "/#about",
  //   newTab: false,
  // },
  {
    id: 5,
    title: "Pricing",
    path: "/#pricing",
    newTab: false,
  },
  {
    id: 6,
    title: "FAQ",
    path: "/#faq",
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
