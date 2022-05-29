import React from "react";

function sponsor() {
  return (
    <div id="sponsor">
      <h2 className="toolsHeading">OUR SPONSORS</h2>
      <div className="line"></div>
      <div className="aboutText">
        <p>
          Our sponsor are the one who lights the candle of Education in the
          Darkness due to corruption and poor Governance.
        </p>
      </div>
      <div className="sponsorCards">
        <div>
          <img
            src="https://images.livemint.com/img/2020/08/13/600x338/LocoPA_1592313175874_1592313196211_1597308383286.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ITC_Limited_Logo.svg/1200px-ITC_Limited_Logo.svg.png"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2021/09/HCL-Logo.png"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://indianroadsafety.s3.amazonaws.com/ngoteam_image/9036ef3375dc4cebae65a232b4935ebc.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Nestle-Logo-1984.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://lawprofessors.typepad.com/.a/6a00d8341bfae553ef01b8d1594773970c-800wi"
            alt=""
          ></img>
        </div>

        <div>
          <img src="https://graphhene.org/images/logo.png" alt=""></img>
        </div>
        <div className="donateD">
          <img
            src="https://www.freepnglogos.com/uploads/paypal-logo-png-7.png"
            alt=""
          ></img>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJntwIYCMHdR1vK3Vp-cpUGJg_FEVDhqFOPg117YANfam680w8JHlXFaxn2QEjS6WUg8&usqp=CAU"
            alt=""
          ></img>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/google-pay-2038779-1721670.png"
            alt=""
          ></img>
          <img
            src=" data:image/png;base64,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"
            alt=""
          ></img>
          <button id="btn1" class="btnD">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default sponsor;
