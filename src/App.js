import "./App.css";
import { motion } from "framer-motion";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Adventures from "./components/Adventures/Adventures";

function App() {
  const footLinks = [
    {
      id: 1,
      title: "See",
      link: "https://www.google.com",
      linkTitle: " Popular Faucets You Can Try Now",
    },
    {
      id: 2,
      title: "Learn",
      link: "https://www.google.com",
      linkTitle: "The History of Crypto Faucets",
    },
  ];

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
          {footLinks.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: item.id * 0.2, type: "spring" }}
            >
              <p className="title">{item.title}</p>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.linkTitle}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
