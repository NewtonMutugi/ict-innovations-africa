import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "AI Web Generator",
  description:
    "This is an AI Website Generator that helps you create a website in minutes.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionTwo />
      <Features />
      {/* <Brands /> */}
      {/* <AboutSectionTwo /> */}
      {/* <Testimonials /> */}
      <Pricing />
      <AboutSectionOne />
      <Faq />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
