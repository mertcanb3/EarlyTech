import React from "react";
import bg from "../assets/bg.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Member1 from "../assets/1.png";
import Member2 from "../assets/2.png";
import Member3 from "../assets/3.png";
import Member4 from "../assets/4.png";
import Member5 from "../assets/5.png";
import Member6 from "../assets/6.png";
import Member7 from "../assets/7.png";
import Member8 from "../assets/8.png";
import Member9 from "../assets/9.png";

function Teams() {
  // Array of member objects
  const members = [
    {
      name: "GOKHAN",
      position: "General Management",
      intro:
        "Ex-INTEL, Ex-IEEE Regional Board Member, ODTU-Sabanci-MIT, 15 years of Tech. Management, 3-time founder, Holder of Exceptional Talent Visa, Among 50 Tech faces of the UK. Mentor @UCL, @EBRD among many others.",
      imageSrc: Member1,
    },
    {
      name: "DAVID",
      position: "General Coordination",
      intro:
        "40+ years of work experience. Author of Startup Ninja, Entrepreneur in Residence, Worked in Canada, UK, Jordan, India, Consultant @ the European Business and Innovation Centre Network for 20 years. Software Engineer by Birmingham University UK.",
      imageSrc: Member2,
    },
    {
      name: "TAGHI",
      position: "Technical Improvement",
      intro:
        "Assistant Professor in Mathematical Optimization and Machine Learning, PhD. from Univ. of Waterloo, MIT Postdoctoral Fellow. AI consultant for tech scaleups.",
      imageSrc: Member3,
    },
    {
      name: "BERC",
      position: "Strategy and Innovation",
      intro:
        "Ex-HP, Ex-GSK, Director @Maven Insights in Saudi Arabia. Industrial Engineer. M.Sc. in Engineering Management from Rochester. Diploma from Oxford University for Strategy and Innovation, Angel Investor, Mentor, DEIK Saudi-Turkiye Committee Member.",
      imageSrc: Member4,
    },
    {
      name: "JANE",
      position: "Financial Preparations",
      intro:
        "Ex-Banker for 10+ years. Worked in treasury and marketing departments. Maths Undergraduate & Economics Degree from Univ. of Bath, UK. Data Science and Data Management with Python, Power BI.",
      imageSrc: Member5,
    },
    {
      name: "SAHIN",
      position: "Investment Process",
      intro:
        "Ex-Siemens, ODTU- TU Berlin-Singularity, Founder and CEO of Faradai, Eurogia Board Member, Angel Investor, Raised investment for 3 rounds and from international VCs.",
      imageSrc: Member6,
    },
    {
      name: "ERTU",
      position: "Educational Technologies",
      intro:
        "ODTU-Drexel-Harvard, Chegg Inc. Country Manager, Founder of DersimiX - Global Young Scholars - Student Hub- ikampus - egitim hub, Edutech Guru, Angel Investor.",
      imageSrc: Member7,
    },
    {
      name: "AMINA",
      position: "General Operations",
      intro:
        "Visual Storyteller, Content creator and editor. University of Vienna.",
      imageSrc: Member8,
    },
    {
      name: "İSMAIL",
      position: "Strategic Marketing",
      intro:
        "Country Manager AVK International (Danish Company), Founder of Startup Digest, Angel Investor for 6 startups, Mechanical Engineer, MIT.",
      imageSrc: Member9,
    },
  ];

  return (
    <div
      id="team-section"
      className="rounded-3xl md:h-[290vh] sm:h-[810vh] sm:px-5 md:px-0 md:pb-24 sm:pb-24 relative bottom-10 z-30 flex flex-wrap justify-between items-center"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex flex-wrap justify-center [&>*]:mx-4 w-full">
        {members.map((member) => (
          <div className="flex flex-col">
            <img
              src={member.imageSrc}
              alt={member.name}
              className="h-80 mx-auto relative top-[160px] "
            />
            <div
              key={member.name}
              className="bg-gray-100 flex flex-col items-center md:[&>*]:w-[450px] md:[&>*]:h-[450px] sm:[&>*]:h-[500px] pt-3"
            >
              <div className="flex flex-col items-center h-[220px] relative ">
                <p className="text-2xl font-semibold tracking-wider relative top-40">
                  {member.name}
                </p>
                <p className="relative top-40 font-semibold text-gray-700">
                  {member.position}
                </p>

                {/* Add a container for the intro text with scroll */}
                <div
                  className="relative top-40 mt-5 mx-12 h-[150px] overflow-y-scroll tracking-wider text-center pr-2"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#d1d5db transparent",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.overflowY = "scroll")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.overflowY = "hidden")
                  }
                >
                  {member.intro}
                </div>

                <div className="flex bg-gray-200 w-full justify-center [&>*]:mx-4 h-14 items-center absolute bottom-0">
                  <LinkedInIcon fontSize="large" sx={{ color: "#001859" }} />
                  <EmailIcon fontSize="large" sx={{ color: "#001859" }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
