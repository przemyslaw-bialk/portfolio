import "./assets/main.scss";
import AboutMe from "./assets/components/AboutMe/AboutMe";
import Projects from "./assets/components/Projects/Projects";
import Description from "./assets/components/Description/Description";

import { PiCassetteTapeLight } from "react-icons/pi";
import {
  IoBookOutline,
  IoCarSportOutline,
  IoRestaurantOutline,
  IoBagCheckOutline,
} from "react-icons/io5";
import { GiBoatFishing } from "react-icons/gi";
import ContactForm from "./assets/components/ContactForm/ContactForm";
import Footer from "./assets/components/Footer/Footer";
import Skills from "./assets/components/Skills/Skills";

function App() {
  const projects = [
    {
      title: "clean-read",
      logo: <IoBookOutline />,
      tags: ["MERN", "full-stack", "react", "jwt"],
      github: "https://github.com/Losssik/clean-read",
      live_version: "https://host559218.xce.pl/",
    },
    {
      title: "tiste",
      tags: ["react", "recharts", "local storage", "leaflet"],
      github: "https://github.com/Losssik/Tiste-TS",
      logo: <GiBoatFishing />,
      live_version: "https://tiste.pl/",
    },
    {
      title: "tapes-transfer",
      description: "company site built with REACT",
      tags: ["react", "styled-components", "commercial project"],
      logo: <PiCassetteTapeLight />,
      github: "https://github.com/Losssik/kasety",
      live_version: "https://tapestransfer.com/",
    },
    {
      title: "osk-abas",
      tags: ["react", "design", "commercial project"],
      logo: <IoCarSportOutline />,
      github: "https://github.com/Losssik/abas",
      live_version: "https://osk-abas.pl/",
    },
    {
      title: "restauracja leśna",
      tags: ["wordpress", "AI implementaion", "commercial project"],
      logo: <IoRestaurantOutline />,
      live_version: "https://restauracjalesna.com/",
    },
    {
      title: "miropak",
      tags: ["wordpress", "woocommerce", "apilo", "commercial project"],
      logo: <IoBagCheckOutline />,
      live_version: "https://miropak.pl/",
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      <AboutMe />
      <Projects projects={projects} />
      <Description />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
