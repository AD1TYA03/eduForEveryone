import React from "react";
import Typical from "react-typical";
import { Link } from "react-scroll";

function intro() {
  return (
    <div className="introMain" id="home">
      <div className="intro2">
        <h1 className="tag1">Education</h1>
        <h1 className="tag2">
          Now <span>At</span> Your
        </h1>
        <h1 className="tag3">Doorstep</h1>

        <h1 className="anime">
          <Typical
            steps={[
              "Padega📚 India🇮🇳",
              1000,
              "Tabhi Tho Badega📈 India🇮🇳",
              1000
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
        <Link activeClass="active" to="schedule" spy={true} smooth={true}>
          <button className="startBtn">START LEARNING</button>
        </Link>
      </div>
    </div>
  );
}

export default intro;
