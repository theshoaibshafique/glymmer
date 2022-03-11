import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Adventures from "./components/Adventures/Adventures";

function App() {
  return (
    <div className="App">
      <div className="leftSide">
        <Hero />
        <About />
        <Adventures />
      </div>

      <div className="rightSide">
        <div className="faucetAnimation">
          <img src="./faucet-animation.gif" alt="Faucet Animation" />
        </div>
        <div className="footerLinks">
          <div>
            <p className="title">See</p>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              Popular Faucets You Can Try Now
            </a>
          </div>
          <div>
            <p className="title">Learn</p>
            <a href="https://www.google.com" target="_blank" rel="noreferrer">
              The History of Crypto Faucets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
