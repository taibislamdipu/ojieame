import HeroSection from "./components/HeroSection/HeroSection";
import MySkillSet from "./components/MySkillSet/MySkillSet";
import NavBar from "./components/NavBar/NavBar";
import { useMediaQuery } from "react-responsive";

function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div>
      <NavBar/>
      <HeroSection isSmallScreen={isSmallScreen}/>
      <MySkillSet isSmallScreen={isSmallScreen}/>
    </div>
  );
}

export default App;
