import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | ICT Innovations Africa",
  description:
    "ICT Innovations Africa is a leading technology solutions provider dedicated to fostering innovation and digital transformation across the African continent. Our team of experts combines local insights with global best practices to develop tailored solutions that meet the unique needs of our clients.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with us today!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
