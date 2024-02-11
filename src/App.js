import "./App.css";
import Navbar from "./components/navbar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import AddchartIcon from "@mui/icons-material/Addchart";
import TextField from "@mui/material/TextField";
import Teams from "./components/teams";
import Footer from "./components/footer";
import FormSubmit from "./components/formsubmit";
import FAQs from "./components/faq";

function App() {
  const CustomTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      // Targets the input element
      color: "#081631", // Text color
      backgroundColor: "#F3F4F6", // Background color
      borderRadius: "40px 0 0 40px", // Left border radius
      fontSize: "18px",
      padding: "7px 330px",
      "& fieldset": {
        // Targets the border
        borderColor: "black", // Border color
      },
      "&:hover fieldset": {
        backgroundColor: " #F3F4F6",
        borderColor: "black", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        // Border color when the input is focused
        borderColor: "black",
      },
    },
  });

  const CustomButton = styled(Button)({
    backgroundColor: "#FAD64B", // Example: Change to any color you want
    color: "#081631", // Text color
    fontSize: "22px", // Change text size
    fontWeight: "900",
    borderRadius: "3px", // Adjust border radius
    padding: "15px 48px", // Example: Change border color and width as needed
    "&:hover": {
      backgroundColor: "#e3bc24", // Darker shade for hover state
      borderColor: "#005cbf", // Optionally change the border color on hover
    },
    transition: "all 0.7s",
    textTransform: "none", // Prevents text from being all uppercase
    letterSpacing: "1px",
    // Add other states (active, focus) if needed
  });

  const CustomButtonTwo = styled(Button)({
    backgroundColor: "#081631", // Example: Change to any color you want
    color: "#00000", // Text color
    fontSize: "22px", // Change text size
    fontWeight: "900",
    borderRadius: "3px", // Adjust border radius
    padding: "15px 52px", // Example: Change border color and width as needed
    "&:hover": {
      backgroundColor: "#e3bc24", // Darker shade for hover state
      borderColor: "#005cbf", // Optionally change the border color on hover
    },
    transition: "all 0.7s",
    textTransform: "none", // Prevents text from being all uppercase
    letterSpacing: "1px",
    // Add other states (active, focus) if needed
  });

  return (
    <div className="app">
      <Navbar />
      <div className=" h-[550px] bg-blue-1000">
        <div className="flex items-center ">
          <div className="flex flex-col text-white-100 w-[53%] mt-24 ml-6 ">
            <h4 className="font-semibold tracking-widest">
              WEB HOSTING, DOMAINS, WORDPRESS
            </h4>
            <h5 className="leading-[75px] font-source-serif font-extrabold text-[55px] ">
              EarlyTech makes{" "}
              <span className="bg-grey-600 px-1"> Managment </span>{" "}
              <span className="px-3 ml-3 font-sans bg-blue-500">
                convinient
              </span>
            </h5>
            <div className="pt-4">
              <CustomButton variant="contained">Get Started</CustomButton>
            </div>
            <p className="mt-2">
              Rated ★★★★★ on{" "}
              <span className="font-source-serif font-extrabold text-2xl ">
                TrustPilot.com{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 h-[750px] ">
        <div className="flex justify-center  [&>*]:bg-white-200 [&>*]:h-[330px] [&>*]:w-[30%]  [&>*]:mx-5 [&>*]:mt-[-60px] [&>*]:rounded-lg [&>*]:flex [&>*]:flex-col">
          <div className="pt-4 pl-8">
            <ContentPasteSearchIcon
              className="mb-3"
              fontSize="large"
              sx={{ color: "#1A74FF", fontSize: "50px" }}
            />{" "}
            <h5 className=" text-[28px] font-bold font-">
              Planning and Roadmap
            </h5>
            <a
              className="mt-2 text-xl underline underline-offset-4 text-blue-600 font-bold mb-3"
              href="google.com"
            >
              {" "}
              Learn more →
            </a>
            <p className="mt-3 font-medium tracking-wide text-lg mb-3 ">
              • Assess objectives
            </p>
            <p className="font-medium tracking-wide text-lg mb-3">
              • Digital strategy and roadmap
            </p>
            <p className="font-medium tracking-wide text-lg mb-3">
              • Identify initiatives and prioritize
            </p>
          </div>
          <div className="pt-4 pl-8">
            <ImportantDevicesIcon
              className="mb-3"
              fontSize="large"
              sx={{ color: "#1A74FF", fontSize: "50px" }}
            />{" "}
            <h5 className=" text-[28px] font-bold font-">
              Technology Integration
            </h5>
            <a
              className="mt-2 text-xl underline underline-offset-4 text-blue-600 font-bold mb-3"
              href="google.com"
            >
              {" "}
              Learn more →
            </a>
            <p className="mt-3 font-medium tracking-wide text-lg mb-3">
              • Implement appropriate technologies
            </p>
            <p className="font-medium tracking-wide text-lg mb-3">
              • Design solutions and enhance efficiency.
            </p>
            <p className="font-medium tracking-wide text-lg mb-3">
              • Provide guidance and find strategies.
            </p>
          </div>
          <div className="pt-4 pl-8">
            <AddchartIcon
              className="mb-3"
              fontSize="large"
              sx={{ color: "#1A74FF", fontSize: "50px" }}
            />{" "}
            <h5 className=" text-[28px] font-bold ">KPI and Optimization</h5>
            <a
              className="mt-2 text-xl underline underline-offset-4 text-blue-600 font-bold mb-3"
              href="google.com"
            >
              {" "}
              Learn more →
            </a>
            <p className=" mt-3 font-medium tracking-wide text-lg mb-3">
              • Assess capabilities and objectives
            </p>
            <p className="font-medium tracking-wide text-lg mb-3">
              • Digital strategy and roadmap
            </p>
            <p className="font-medium tracking-wide text-lg mb-3">
              • Identify key initiatives and prioritize
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto  w-8/12 mt-24">
          <h5 className="mb-5 text-[3.75rem] font-source-serif font-[900] text-white-300 ">
            Get notified about our latest offers and news!
          </h5>
          <div className="flex ">
            <CustomTextField id="filled-basic" variant="filled" />
            <CustomButtonTwo variant="contained">Join</CustomButtonTwo>
          </div>
        </div>
      </div>
      <Teams />
      <FormSubmit />
      <FAQs/>
      <Footer />
    </div>
  );
}

export default App;
