import React , { Component }  from "react";
import {Link} from 'react-scroll'
import "../styles.css";
function header() {
  return (
    <div className="headerMain">
      <img src="https://i.ibb.co/fpgM7Qw/masterji.png" alt="logo"></img>
      <h1 className="logoName">e-MASTARJI</h1>
      <div className="headButtons">
        <ul>
          <li>
          <Link activeClass="active" to="home" spy={true} smooth={true}><button>Home</button></Link> 
          </li>
          <li>
          <Link activeClass="active" to="about" spy={true} smooth={true}><button>About</button></Link>
          </li>
          <li>
          <Link activeClass="active" to="schedule" spy={true} smooth={true}><button>Schedule</button></Link> 
          </li>
          <li>
          <Link activeClass="active" to="sponsor" spy={true} smooth={true}><button>Donate</button></Link> 
          </li>
          <li>
          <Link activeClass="active" to="contact" spy={true} smooth={true}><button>Contact Us</button></Link>
          </li>
        </ul>
      </div>
      <button className="loginBtn">LOGIN</button>
      <button className="loginBtn2">SIGN UP</button>
    </div>
  );
}

export default header;
