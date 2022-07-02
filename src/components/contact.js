import React,{useState} from "react";

function Contact() {
  const [butn, currentButn] = useState(0);

  if(butn===0)
  return (
    <div id="contact">
      <h2 className="toolsHeading">CONTACT US</h2>
      <div className="line"></div>
      <div className="aboutText">
        <p>We are availabe 24/7 At your Help.</p>
      </div>

      <div className="contactMain">
        <button id="btn1" onClick={() => currentButn(1)}>Get In Touch</button>
        <button id="btn2"onClick={() => currentButn(2)}>Work With Us</button>
        <div className="cimg">
          <img
            src="https://images.ctfassets.net/6d085vujy22q/5sc2xjsikpED4DCLTan9pL/887be6486a8f191ac40d1092f0d3591e/Support_Hero.jpg?w=1372&h=758&q=50&fm=webp"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );

  if(butn===1)
  return(
<div>Hey It worked i am butn 1
<button id="btn1" onClick={() => currentButn(0)}>Go Back</button>
</div>
  );
  if(butn===2)
  return(
<div>Hey It worked i am butn 2
<button id="btn1" onClick={() => currentButn(0)}>Go Back</button>
</div>
  );
}

export default Contact;
