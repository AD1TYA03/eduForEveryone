import React from "react";

function about() {
  return (
    <div className="toolsMain">
      <h2 className="toolsHeading">ABOUT US</h2>
      <div className="line"></div>
      <div className="aboutText">
        <p>
          We are a Non Profit Organisation Whose Main Aim is to Skill India. We
          Provide Technical as Well as Non-Technical Education to
          Underprivileged Students of Rural Areas Of India.
        </p>
      </div>
      <div className="aboutCards">
        <div className="card1">
          <div>
            {" "}
            <img
              src="https://i.ibb.co/Brd39W4/Free-Education.jpg"
              alt="free"
            ></img>{" "}
          </div>
          <h1>Free Education</h1>
          <p>Education Must be Free, Education Must be for All</p>
        </div>
        <div className="card2">
          <div>
            {" "}
            <img src="https://i.ibb.co/r0WbvnC/DE.jpg" alt=""></img>
          </div>
          <h1>E-LEARNING</h1>
          <p>e-Learning Methods Will Help Students To Gain Morden Knowledge.</p>
        </div>
        <div className="card3">
          <div>
            <img src="https://i.ibb.co/RCkccHd/class.png" alt=""></img>
          </div>
          <h1>Offline Center's</h1>
          <p>Availability Of Offline Center At Every Village.</p>
        </div>
        <div className="card3">
          <div>
            <img
              src="https://images.indianexpress.com/2020/09/scholarship-a-1200.jpg"
              alt=""
            ></img>
          </div>
          <h1>SCHOLARSHIP</h1>
          <p>Distribution of scholarship for Inovation and Higher Studies.</p>
        </div>
      </div>
    </div>
  );
}

export default about;
// To provide Technical Education in Rural Area to Mentain India's Stablity with efficient growth.
// To Spread The Light of Modern Education Covering Every cornor of The Country.
// Availability of cost Free Creative and Modern Education with best teacher all over India.
