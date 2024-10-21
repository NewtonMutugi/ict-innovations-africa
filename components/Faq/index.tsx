import {
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";
import SectionTitle from "../Common/SectionTitle";
import questionsData from "./questionsData";

const Faq = () => {
  return (
    <section id="faq">
      <div className="border-b border-body-color/[.15] py-16 pb-16 dark:border-white/[.15] md:py-16">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph=""
          center
          mb="20px"
        />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 pt-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="text-secondary mb-4 text-3xl font-semibold">
                Foremost Common <span className="text-primary">Questions</span>
              </h2>
              <p className="text-gray-600">
                Curious about how WebGenerator.ai ensures authenticity or its
                usability? Explore these commonly asked questions for insights
                into our innovative platform.
              </p>
              <p className="text-gray-600">
                Have more questions? Feel free to reach out to our support team
                for assistance.
              </p>
            </div>
            <div>
              <Accordion>
                {questionsData.map(({ question, answer }, index) => (
                  <AccordionItem key={index} title={question} body={answer} />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ title, body }) => (
  <AccordionPanel>
    <AccordionTitle>{title}</AccordionTitle>
    <AccordionContent>
      <p className="text-gray-600">{body}</p>
    </AccordionContent>
  </AccordionPanel>
);

export default Faq;
  