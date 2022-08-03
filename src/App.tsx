import { AboutUs } from "./components/AboutUs/AboutUs";
import { Clients } from "./components/Clients/Clients";
import { Features } from "./components/Features/Features";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { OurServices } from "./components/OurServices/OurServices";
import { Team } from "./components/Team/Team";
import "./global.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <AboutUs />
      <OurServices />
      <Gallery />
      <Clients />
      <Team />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
