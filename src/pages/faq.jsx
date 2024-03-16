import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

function FAQs() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const faqs = [
    {
      question: "What service do you provide?",
      answer:
        "We provide Cofounder As A Service (CoAAS) tailored for tech companies seeking Global Growth/Expansion. Our goal is to navigate companies through the challenging phase known as the 'Valley of Death', enabling them to secure a Global Footprint and proceed independently on their growth journey after we leave.",
    },
    {
      question: "How long does the CoAAS engagement last?",
      answer:
        "The engagement period typically ranges from 6 to 24 months, tailored to meet your specific needs and expectations. Engagements shorter than 6 months may not allow for optimal value creation, while extending beyond 24 months becomes unnecessary as we aim to deliver comprehensive support within that timeframe. Beyond 24 months, we transition to long-term allies and collaborators, committed to supporting your journey indefinitely.",
    },
    {
      question: "Do you take any equity?",
      answer:
        "It depends on the situation. There are a couple of companies in which we have shares, and we'd love to work with you on an occasional basis and continue our collaboration after 24 months. We can discuss equity options after the initial 6 months have passed.",
    },
    {
      question: "How can I trust that you will create value for us?",
      answer:
        "We encourage you to speak with over 20 companies we've worked hand in hand with, 100+ companies we have mentored on a regular basis, and 1000+ companies we provide services occasionally. You have the freedom to choose any of these companies and contact them at any time. Feel free to be a spy or agent and check our past work without even informing us.",
    },
    {
      question: "What sets you apart from others in the market?",
      answer:
        "We're your fellow, friend, comrade, companion, and partner in crime, serving as your trusted guide in Sales, Marketing, and Investment for Global Growth. Together, we form transformers alongside founders to tackle the formidable challenges of globalisation on your global journey.",
    },
    {
      question: "What is your unfair competitive advantage?",
      answer:
        "Our unfair competitive advantage lies in our speed. We pride ourselves on our ability to instantly respond and execute tasks within milliseconds. If you're unsatisfied with any aspect of our work, please don't hesitate to tell us.",
    },
    {
      question: "Tell me about your success so far?",
      answer:
        "We have successfully expanded sales to 20+ different countries, from Spain to the UK, from the USA to Morocco, prepared marketing plans for over 50+ technology companies, and executed them to drive sales. Additionally, we have raised investment/received term sheets from investors in the UK, USA, Switzerland, Turkey, and more.",
    },
    {
      question: "Tell me about your team?",
      answer:
        "Our team boasts over 100+ years of combined business and management experience, coupled with primarily engineering backgrounds. Proficient in Applied Artificial Intelligence (AI), Internet of Things (IoT), Edutech, and Cleantech, our team members are graduates from esteemed universities worldwide and have worked for renowned companies like INTEL, Accenture, Siemens, HP, and more. Each member is an entrepreneur with a diverse portfolio of failures and successes, but most importantly, they understand YOU and your needs better than anyone else.",
    },
  ];

  const dividerStyle = {
    my: 2,
    width: isMobile ? "100%" : "95%",
    borderRadius: 2,
    mr: isMobile ? "50px" : "100px",
    border: "2px solid black",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  return (
    <div
      id="faq-section"
      className="flex relative bottom-28 rounded-t-3xl bg-white-0"
    >
      <div className="flex flex-col items-center md:ml-12 sm:ml-8 pt-24">
        <h5 className="text-5xl font-source-serif font-extrabold text-black-700 md:w-full sm:w-11/12 mb-12">
          Frequently Asked Questions
        </h5>
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <Divider variant="middle" sx={dividerStyle} />
            <div className="flex my-8 sm:flex-wrap md:flex-nowrap">
              <h5 className="text-2xl md:w-5/12 sm:w-11/12 font-semibold">
                {faq.question}
              </h5>
              <p className="md:w-9/12 md:mx-24 sm:w-10/12 text-black-600 tracking-wide md:mt-0 sm:mt-5">
                {faq.answer}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
