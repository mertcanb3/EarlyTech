import "./App.css";
import Navbar from "./components/navbar";
import Mission from "./pages/mission";
import Teams from "./pages/teams";
import Footer from "./components/footer";
import FormSubmit from "./pages/formsubmit";
import FAQs from "./pages/faq";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Mission />
      <Teams />
      <FormSubmit />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
