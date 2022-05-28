import "./styles.css";
import Header from "../src/components/header";
import Intro from "../src/components/intro";
import About from "../src/components/about";
import Schedule from "../src/components/schedule";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Schedule />
    </div>
  );
}
