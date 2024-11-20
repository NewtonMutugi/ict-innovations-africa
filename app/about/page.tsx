import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | ICT Innnovations Africa",
  description:
    "This is the about page of ICT Innovations Africa. Here you can learn about us and what we hope to achieve with our innovative products across the continent and globally!",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn about us and what we hope to achieve with our innovative products across the continent and globally!"
      />
      <AboutSectionThree />
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
