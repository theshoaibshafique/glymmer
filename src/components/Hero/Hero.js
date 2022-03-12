import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: {
      x: -100,
    },
    visible: {
      x: [-100, 10, 0],
      transition: {
        staggerChildren: 0.5,
        type: "spring",
        duration: 1.5,
      },
    },
  };
  return (
    <div className="Hero">
      <div className="logo">
        <img src="./glymmer-logo.png" alt="Logo" />
        <p>a crypto faucet / a web3 experiment</p>
      </div>

      <motion.div initial="hidden" animate="visible" variants={variants}>
        <motion.div className="connectWallet">
          <motion.button
            className="connectWalletbtn"
            before-text="Connect"
            whileHover={{ scale: 1.1 }}
          >
            <span className="btnTitle">Click Here to Connect</span>
            <br />
            <span className="btnSubtitle">
              Your Wallet will appear + you can accept the tokens
            </span>
          </motion.button>
        </motion.div>

        <motion.div className="walletAddressContainer">
          <div className="walletAddress" address-text="Verify">
            <div>
              <p>Glymmer Polygon Token Contract Address ($GLYMR)</p>
              <p className="btnTitle">
                0×b96264ea8623cd1c59043e28adf2452c690953e9
              </p>
            </div>
            {/* <div>
            <p>Glymmer’s $MATIC Drip Contract Address</p>
            <p className="btnTitle">
              0×b96264ea8623cd1c59043e28adf2452c690953e9
            </p>
          </div> */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
