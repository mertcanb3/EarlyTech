import React from "react";
import Divider from "@mui/material/Divider";

function FAQs() {
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
      <div className="flex flex-col items-center ml-12 pt-24 ">
        <h5 className=" text-5xl font-source-serif font-extrabold text-black-700 w-full mb-12 ">
          Frequently Asked Questions
        </h5>
        <Divider variant="middle" sx={dividerStyle} />
        <div className="flex my-8">
          <h5 className="text-2xl w-5/12 font-semibold">
            How long Does the consulting Last?
          </h5>
          <p className="w-9/12 mx-24 text-black-600 tracking-wide">
            Sum dolor. Necessitatibus, aliquam commodi quis veritatis esse
            aperiam fuga dignissimos dolor accusantium molestiae repellendus.
            Consequatur esse, aperiam fuga laboriosam officia maiores magnam?
            Laborum veniam, id quam perferendis laudantium rerum quidem minima
            dignissimos dolore quis aliquam, pariatur perspiciatis neque. In
            nihil quos earum ipsum nobis impedit obcaecati quis rerum est
            perferendis. Rem vitae consectetur at fugiat voluptate?
          </p>
        </div>
        <Divider variant="middle" sx={dividerStyle} />
        <div className="flex my-8">
          <h5 className="text-2xl w-5/12 font-semibold">
            Can We Contact You 24/7?
          </h5>
          <p className="w-9/12 mx-24 text-black-600 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            consectetur repellendus accusantium sunt neque perferendis quaerat
            possimus cum ut tempore impedit nobis saepe rem, eaque aperiam totam
            at magni aspernatur fugiat ex nesciunt dolore architecto. Recusandae
            vel officiis laboriosam odit vero, adipisci minima quibusdam aliquam
            fugit magni ipsa. Fugit quam eius repudiandae placeat dolor quis
            harum alias ullam reiciendis dicta?
          </p>
        </div>
        <Divider variant="middle" sx={dividerStyle} />
        <div className="flex my-8">
          <h5 className="text-2xl w-5/12 font-semibold">
            How long Does the consulting Last?
          </h5>
          <p className="w-9/12 mx-24 text-black-600 tracking-wide">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            magnam vel dolore, atque laudantium maiores sint dolorem,
            voluptatibus doloribus id quam eveniet enim exercitationem animi
            quidem reiciendis, earum illum repellendus facilis quod? Architecto,
            est sequi eveniet ullam dolorum aliquam aliquid at tempore beatae
            pariatur possimus.
          </p>
        </div>
        <Divider variant="middle" sx={dividerStyle} />
        <div className="flex my-8">
          <h5 className="text-2xl w-5/12 font-semibold">
            Can I get Consulting from anywhere?
          </h5>
          <p className="w-9/12 mx-24 text-black-600  tracking-wide">
            Sum dolor. Necessitatibus, aliquam commodi quis veritatis esse
            aperiam fuga dignissimos dolor accusantium molestiae repellendus.
            Consequatur esse, aperiam fuga laboriosam officia maiores magnam?
            Laborum veniam, id quam perferendis laudantium rerum quidem minima
            dignissimos dolore quis aliquam, pariatur perspiciatis neque. In
            nihil quos earum ipsum nobis impedit obcaecati quis rerum est
            perferendis. Rem vitae consectetur at fugiat voluptate?
          </p>
        </div>
        <Divider variant="middle" sx={dividerStyle} />
      </div>
    </div>
  );
}

export default FAQs;
