import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleServices";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] ">
            <SectionTitle
              title="Services"
              paragraph="We provide a wide range of services to help you grow your business."
              center
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              {ServicesData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
