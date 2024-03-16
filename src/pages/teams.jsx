import React, { useState, useEffect } from "react";
import bg from "../assets/bg.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Member1 from "../assets/1.png";
import Member2 from "../assets/2.png";
import Member3 from "../assets/3.png";
import Member4 from "../assets/4.png";
import Member5 from "../assets/5.png";
import Member6 from "../assets/6.png";
import Member7 from "../assets/7.png";
import Member8 from "../assets/8.png";
import Member9 from "../assets/9.png";
import Member10 from "../assets/10.png";

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

function Teams() {
  const [open, setOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const StyledDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiPaper-root": {
      // Targeting the inner Paper component of Dialog
      backgroundColor: "#f0f0f0", // Light grey background
      color: "#333", // Dark text for contrast
      minWidth: isMobile ? "200px" : "500px", // Minimum width
      borderRadius: "8px", // Rounded corners
    },
  }));

  const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: "#1A74FF", // Blue background for the title
    color: "#fff", // White text
  }));

  const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: "40px 40px 40px 40px",
    backgroundColor: "#fff", // White background for the content
  }));

  const members = [
    {
      name: "GOKHAN, Exec-MBA",
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
      name: "TAGHI, PhD",
      position: "Technical Improvement",
      intro:
        "Assistant Professor in Mathematical Optimization and Machine Learning, PhD. from Univ. of Waterloo, MIT Postdoctoral Fellow. AI consultant for tech scaleups.",
      imageSrc: Member4,
    },
    {
      name: "BERC, M.Sc",
      position: "Strategy and Innovation",
      intro:
        "Ex-HP, Ex-GSK, Director @Maven Insights in Saudi Arabia. Industrial Engineer. M.Sc. in Engineering Management from Rochester. Diploma from Oxford University for Strategy and Innovation, Angel Investor, Mentor, DEIK Saudi-Turkiye Committee Member.",
      imageSrc: Member3,
    },
    {
      name: "JANE, MEcon",
      position: "Financial Preparations",
      intro:
        "Ex-Banker for 10+ years. Worked in treasury and marketing departments. Maths Undergraduate & Economics Degree from Univ. of Bath, UK. Data Science and Data Management with Python, Power BI.",
      imageSrc: Member5,
    },
    {
      name: "SAHIN, MEng",
      position: "Investment Process",
      intro:
        "Ex-Siemens, ODTU- TU Berlin-Singularity, Founder and CEO of Faradai, Eurogia Board Member, Angel Investor, Raised investment for 3 rounds and from international VCs.",
      imageSrc: Member6,
    },
    {
      name: "ERTU, MEdu",
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
      name: "İSMAIL, Exec-MBA",
      position: "Strategic Marketing",
      intro:
        "Country Manager AVK International (Danish Company), Founder of Startup Digest, Angel Investor for 6 startups, Mechanical Engineer, MIT.",
      imageSrc: Member9,
    },
    {
      name: "CHARLOTTE, CXO",
      position:
        "Who knows. Could be Digital Marketing, UI/UX Design or Hiring.",
      intro:
        "Benefiting the pool of 100+ people and Depending on your needs, we will add people to your growth journey.",
      imageSrc: Member10,
    },
  ];
  const handleClickOpen = (member) => {
    setCurrentMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{ backgroundSize: "cover", backgroundImage: `url(${bg})` }}
      className="rounded-3xl min-h-screen px-5 pb-24 relative bottom-10 z-30 flex flex-wrap justify-between items-center"
    >
      <div className="flex flex-wrap justify-center w-full [&>*]:mx-8 ">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex flex-col "
            onClick={() => handleClickOpen(member)}
          >
            <img
              src={member.imageSrc}
              alt={member.name}
              className="h-80 mx-auto relative top-[160px]"
            />
            <div className="bg-gray-100 flex flex-col items-center py-3 h-[250px] ">
              <p className="text-2xl font-semibold relative top-[160px] ">
                {member.name}
              </p>
              <div className="overflow-auto max-h-[60px] max-w-[250px] max-h-[30px] relative top-[160px] text-center">
                <p className="font-semibold text-gray-700">{member.position}</p>
              </div>
            </div>
            <div className="flex w-full justify-center [&>*]:mx-2 bg-gray-200">
              <LinkedInIcon fontSize="large" sx={{ color: "#001859" }} />
              <EmailIcon fontSize="large" sx={{ color: "#001859" }} />
            </div>
          </div>
        ))}
      </div>

      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogTitle>
          <div className="flex justify-between font-bold tracking-wider mx-5">
            <p>{currentMember?.name}</p>
            <button onClick={handleClose}>X</button>
          </div>
        </StyledDialogTitle>
        <StyledDialogContent>
          <p className="pt-4">{currentMember?.intro}</p>
        </StyledDialogContent>
      </StyledDialog>
    </div>
  );
}

export default Teams;
