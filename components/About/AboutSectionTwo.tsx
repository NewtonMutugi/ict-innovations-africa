import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28" id="about">
      <div className="container">
        <SectionTitle
          title="Who we are"
          paragraph="Learn about us and what we hope to achieve with our innovative products across the continent and globally!"
          center
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/africans.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/africans.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Who We Are
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  ICT Consultants Ltd is a registered company under the laws of
                  Kenya that was registered in April 2008 with a mission to
                  drive digital transformation. ICT Consultants Ltd is a premier
                  technology consulting firm that combines expertise in web
                  solutions, educational technology, and artificial intelligence
                  to deliver solutions that fuel business growth. We partner
                  with organizations to streamline operations, optimize their
                  digital presence, and align technological strategies with
                  business objectives.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vision
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  To be the most trusted provider of digital and AI solutions in
                  Africa, leading with excellence, innovation, client success,
                  and societal impact.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  To empower organizations with innovative technology solutions
                  that enable growth, enhance operational efficiency, and adapt
                  to an ever-evolving digital landscape. We aim to transform
                  businesses by simplifying complex technological challenges and
                  delivering sustainable, impactful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
