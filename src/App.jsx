import "./main.css";
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import Section from "./Components/section";


function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Section header="Fantasy"/>
    </>
  );
}

export default App;
