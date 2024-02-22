import React from "react";
import Divider from "@mui/material/Divider";

function FAQs() {
  const faqs = [
    {
      question: "How long does the consulting last?",
      answer:
        "Sum dolor. Necessitatibus, aliquam commodi quis veritatis esse aperiam fuga dignissimos dolor accusantium molestiae repellendus. Consequatur esse, aperiam fuga laboriosam officia maiores magnam? Laborum veniam, id quam perferendis laudantium rerum quidem minima dignissimos dolore quis aliquam, pariatur perspiciatis neque. In nihil quos earum ipsum nobis impedit obcaecati quis rerum est perferendis. Rem vitae consectetur at fugiat voluptate?",
    },
    {
      question: "Can We Contact You 24/7?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae consectetur repellendus accusantium sunt neque perferendis quaerat possimus cum ut tempore impedit nobis saepe rem, eaque aperiam totam at magni aspernatur fugiat ex nesciunt dolore architecto. Recusandae vel officiis laboriosam odit vero, adipisci minima quibusdam aliquam fugit magni ipsa. Fugit quam eius repudiandae placeat dolor quis harum alias ullam reiciendis dicta?",
    },
    {
      question: "Can I get consulting from anywhere?",
      answer:
        "Sum dolor. Necessitatibus, aliquam commodi quis veritatis esse aperiam fuga dignissimos dolor accusantium molestiae repellendus. Consequatur esse, aperiam fuga laboriosam officia maiores magnam? Laborum veniam, id quam perferendis laudantium rerum quidem minima dignissimos dolore quis aliquam, pariatur perspiciatis neque. In nihil quos earum ipsum nobis impedit obcaecati quis rerum est perferendis. Rem vitae consectetur at fugiat voluptate?",
    },
  ];

  const dividerStyle = {
    my: 2,
    width: "95%",
    borderRadius: 2,
    mr: "100px",
    border: "2px solid black",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  return (
    <div className="flex relative bottom-28 rounded-t-3xl bg-white-0">
      <div className="flex flex-col items-center md:ml-12 sm:ml-8 pt-24">
        <h5 className="text-5xl font-source-serif font-extrabold text-black-700 md:w-full sm:w-11/12 mb-12">
          Frequently Asked Questions
        </h5>
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <Divider variant="middle" sx={dividerStyle} />
            <div className="flex my-8 sm:flex-wrap md:flex-nowrap">
              <h5 className="text-2xl md:w-5/12 sm:w-11/12 font-semibold">{faq.question}</h5>
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
