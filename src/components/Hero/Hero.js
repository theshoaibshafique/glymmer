import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="logo">
        <img src="./glymmer-logo.png" alt="Logo" />
        <p>a crypto faucet / a web3 experiment</p>
      </div>

      <div className="connectWallet">
        <button className="connectWalletbtn" before-text="Connect">
          <span className="btnTitle">Click Here to Connect</span>
          <br />
          <span className="btnSubtitle">
            Your Wallet will appear + you can accept the tokens
          </span>
        </button>
      </div>

      <div className="walletAddressContainer">
        <div className="walletAddress" address-text="Verify">
          <div>
            <p>Glymmer Polygon Token Contract Address ($GLYMR)</p>
            <p className="btnTitle">
              0×b96264ea8623cd1c59043e28adf2452c690953e9
            </p>
          </div>
          <div>
            <p>Glymmer’s $MATIC Drip Contract Address</p>
            <p className="btnTitle">
              0×b96264ea8623cd1c59043e28adf2452c690953e9
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
