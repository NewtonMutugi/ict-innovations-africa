import {
  Accordion,
  AccordionPanel,
  AccordionTitle,
  AccordionContent,
} from "flowbite-react";

const Faq = () => {
  return (
    <section id="faq">
      <div className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-bold uppercase text-primary">
                faq
              </p>
              <h2 className="text-secondary mb-4 text-3xl font-semibold">
                Foremost Common <span className="text-primary">Questions</span>
              </h2>
              <p className="text-gray-600">
                Curious about how Essay Sprint ensures authenticity or its
                usability? Explore these commonly asked questions for insights
                into our innovative platform.
              </p>
            </div>
            <div>
              <Accordion alwaysOpen>
                <AccordionItem
                  title="How does Essay Sprint ensure that the generated essays are not detected as AI-generated or plagiarized?"
                  body="Essay Sprint utilizes sophisticated algorithms to mimic the writing style and voice of the user, ensuring that each essay is unique and original. Additionally, our tool cross-references content with extensive databases to avoid plagiarism."
                />
                <AccordionItem
                  title="Can I trust Essay Sprint with sensitive information and data?"
                  body="Absolutely. We prioritize the privacy and security of our users' data. Essay Sprint adheres to stringent data protection measures, ensuring that all information remains confidential and secure."
                />
                <AccordionItem
                  title="Is Essay Sprint suitable for all academic levels and subjects?"
                  body="Yes, Essay Sprint is designed to accommodate a wide range of academic disciplines and levels. Whether you're a high school student or a doctoral candidate, our tool can assist you in generating compelling essays across various subjects."
                />
                <AccordionItem
                  title="How user-friendly is the Essay Sprint interface?"
                  body="Essay Sprint boasts an intuitive and user-friendly interface, making the essay generation process smooth and straightforward. Even users with minimal technical expertise can navigate the platform with ease."
                />
                <AccordionItem
                  title="Does Essay Sprint offer any support or assistance during the essay writing process?"
                  body="Absolutely. Our dedicated support team is available to assist you every step of the way. Whether you have questions about using the tool or need guidance on refining your essay, we're here to help you achieve academic excellence."
                />
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
