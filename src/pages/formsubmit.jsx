import React from "react";

import whatsapp from "../assets/whatsappIcon.svg";
import email from "../assets/emailIcon.svg";

function FormSubmit() {
  const whatsAppMessage = encodeURIComponent(
    "Hello, I'd like to request a consultation."
  );

  const whatsAppNumber = "447552487007"; // Format without '+' or spaces

  return (
    <div
      id="contact-section"
      className="rounded-t-3xl md:pl-60 sm:pl-0 flex flex-col items-center justify-center md:h-[900px] sm:h-[1600px] bg-grey-200  "
    >
      <div className="flex flex-col  md:w-full sm:w-10/12 relative md:bottom-10 sm:bottom-32">
        <div className="relative bottom-10 ">
          <h5 className="font-source-serif md:text-[3.75rem] sm:text-[3rem] font-extrabold md:pt-0 sm:pt-52">
            Request a consultation.
          </h5>
          <p className=" w-9/12 text-gray-800 text-lg font-[400] flex flex-wrap">
            Schedule a call today and one of our experts will be happy to help
            you decide which professional service is ideal for your business and
            talk to you about next steps. Reach us through:
          </p>
        </div>
        <div className="flex md:flex-row sm:flex-col w-9/12 justify-between sm:mx-auto md:mx-0">
          <a
            href={`https://wa.me/${whatsAppNumber}?text=${whatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-300 mx-1 font-semibold underline flex flex-col items-center relative bottom-2"
          >
            <img
              src={whatsapp}
              alt="WhatsApp Logo"
              className="ml-1 h-[370px]"
            />
            <p className="text-3xl"> WhatsApp </p>
          </a>
          <a
            href="mailto:gokhan@earlytech.com"
            className="text-blue-800 hover:text-blue-300 mx-1 font-semibold underline flex flex-col items-center relative bottom-2"
          >
            <img src={email} alt="Email Logo" className="ml-2 h-[370px]" />
            <p className="text-3xl">E-mail</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FormSubmit;
