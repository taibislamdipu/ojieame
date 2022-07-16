import HeroSection from "./components/HeroSection/HeroSection";
import MySkillSet from "./components/MySkillSet/MySkillSet";
import NavBar from "./components/NavBar/NavBar";
import { useMediaQuery } from "react-responsive";
import Process from "./components/Process/Process";
import RecentProject from "./components/RecentProject/RecentProject";
import Career from "./components/Career/Career";
import AboutMe from "./components/AboutMe/AboutMe";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import WhatNext from "./components/WhatNext/WhatNext";
import Footer from "./components/Footer/Footer";

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      <NavBar />
      <HeroSection isSmallScreen={isSmallScreen} />
      <MySkillSet isSmallScreen={isSmallScreen} />
      <Process isSmallScreen={isSmallScreen} />
      <RecentProject isSmallScreen={isSmallScreen} />
      <Career isSmallScreen={isSmallScreen} />
      <AboutMe isSmallScreen={isSmallScreen} />
      <CaseStudies isSmallScreen={isSmallScreen} />
      <WhatNext isSmallScreen={isSmallScreen} />
      <Footer isSmallScreen={isSmallScreen} />
    </div>
  );
}

export default App;
