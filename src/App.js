import "./App.css";
import AboutUs from "./Components/BodyComponents/AboutUs";
import Contact from "./Components/BodyComponents/Contact";
import Footer from "./Components/BodyComponents/Footer";
import Portfolio from "./Components/BodyComponents/Portfolio";
import HeaderComponets from "./Components/HeaderComponents/HeaderComponets";

function App() {
  return (
    <>
      <HeaderComponets />
      <AboutUs />
      <Portfolio />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
