import "./styles.css";
import Header from "../src/components/header";
import Intro from "../src/components/intro";
import About from "../src/components/about";
import Schedule from "../src/components/schedule";
import Sponsor from "../src/components/sponsor";
import Contact from "../src/components/contact";
import Footer from "../src/components/footer";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Schedule />
      <Sponsor />
      <Contact />
      <Footer />
    </div>
  );
}
