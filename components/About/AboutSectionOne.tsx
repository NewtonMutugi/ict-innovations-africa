import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text, title }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      <p>
        <strong>{title}:</strong> {text}
      </p>
    </p>
  );

  return (
    <section id="about" className="">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-full">
              <SectionTitle
                title="Why Choose ICT Consultants Ltd"
                paragraph=""
                mb="44px"
                center
              />
              <div
                className="wow fadeInUp mb-12  lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="flex flex-wrap justify-center">
                  <div className="f">
                    <List
                      title="Experienced and Diverse Expertise"
                      text="With a team of seasoned professionals across web design, AI, and education, we bring a wealth of knowledge to meet the diverse needs of our clients."
                    />
                    <List
                      title="Client-Centric Solutions"
                      text="We pride ourselves on our customized approach, designing solutions that resonate with each client’s mission, vision, and long-term objectives."
                    />
                    <List
                      title="Commitment to Innovation"
                      text="ICT Consultants Ltd remains at the forefront of emerging technology, consistently integrating the latest advancements to benefit our clients."
                    />
                    <List
                      title="Ethical and Responsible Technology"
                      text="We prioritize ethical practices in AI and data management, building trust by ensuring transparency, security, and compliance in all our projects."
                    />
                    <List
                      title="Scalable, Sustainable Results"
                      text="We design our solutions to grow with our clients, providing sustainable outcomes that stand the test of time."
                    />
                  </div>

                  {/* <div className="w-full px-3 sm:w-1/2 ">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
