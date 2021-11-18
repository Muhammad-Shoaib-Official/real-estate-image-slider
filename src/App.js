import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from "./GlobalStyle";
import Hero from "./Components/Hero/Hero";
import { sliderData } from "./Components/Data/HeroData";

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar/>
    <Hero slides={sliderData}/>
    </>
  );
}

export default App;
