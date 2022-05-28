import React from "react";
import "../styles.css";
function header() {
  return (
    <div className="headerMain">
      <img src="https://i.ibb.co/fpgM7Qw/masterji.png" alt="logo"></img>
      <h1 className="logoName">e-MASTARJI</h1>
      <div className="headButtons">
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Schedule</button>
          </li>
          <li>
            <button>Live Classes</button>
          </li>
          <li>
            <button>Notes</button>
          </li>
        </ul>
      </div>
      <button className="loginBtn">LOGIN</button>
      <button className="loginBtn2">SIGN UP</button>
    </div>
  );
}

export default header;
