import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import List from "./List";

const AboutSectionOne = () => {
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
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-full">
                <SectionTitle
                  title="Our Approach"
                  paragraph=""
                  mb="44px"
                  center
                />
                <div
                  className="wow fadeInUp mb-12 flex  lg:mb-0 "
                  data-wow-delay=".15s"
                >
                  <div className="flex flex-wrap justify-center lg:w-1/2">
                    <div className="flex flex-col justify-center">
                      <List
                        title="Consultation and Analysis"
                        text="Understanding client objectives and assessing their current technological landscape."
                      />
                      <List
                        title="Customized Strategy Development"
                        text="Crafting tailored strategies that align with business goals."
                      />
                      <List
                        title="Implementation and Integration"
                        text="Executing solutions with an emphasis on seamless integration and minimal disruption."
                      />
                      <List
                        title="Training and Support"
                        text="Providing ongoing support and training to ensure clients can maximize the benefits of our solutions."
                      />
                      <List
                        title="Monitoring and Optimization"
                        text="Continuously evaluating and enhancing solutions to adapt to changing needs and technological advancements."
                      />
                    </div>

                    {/* <div className="w-full px-3 sm:w-1/2 ">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div> */}
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div
                      className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                      data-wow-delay=".15s"
                    >
                      <Image
                        src="/images/about/our-approach.svg"
                        alt="about image"
                        fill
                        className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                      />
                      <Image
                        src="/images/about/our-approach.svg"
                        alt="about image"
                        fill
                        className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                      />
                    </div>
                  </div>
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
