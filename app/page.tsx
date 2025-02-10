import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICT Innovations Africa",
  description:
    "ICT Innovations Africa is a leading technology solutions provider dedicated to fostering innovation and digital transformation across the African continent. Our team of experts combines local insights with global best practices to develop tailored solutions that meet the unique needs of our clients.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <Services />
      <Pricing />
      {/* <Brands /> */}
      <Testimonials />
      {/* <Events /> */}
      {/* <AboutSectionOne /> */}
      {/* <Faq /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
