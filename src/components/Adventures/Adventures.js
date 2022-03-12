import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Adventures.css";
const Adventures = () => {
  const experiments = [
    {
      id: 1,
      title: "FWeb3.xyz",
      subtitle: "Game to Learn",
      link: "#",
      linkTitle: "9 Tasks Verification",
    },
    {
      id: 2,
      title: "The People’s NFT",
      subtitle: "Upcoming Team-Based NFT",
      link: "#",
      linkTitle: "peoplesnft.io",
    },
    {
      id: 3,
      title: "Cryptovoxels",
      subtitle: "Open Metaverse",
      link: "#",
      linkTitle: "cryptovoxels.com/parcels/4182",
    },
  ];

  const work = [
    {
      id: 1,
      title: "",
      subtitle: "Interactive Article ",
      link: "#",
      linkTitle:
        "How to Make a Fungible Token on the Polygon Network When You Can’t Code at All",
    },
    {
      id: 2,
      title: "Primer",
      subtitle: "Experimental Reference",
      link: "#",
      linkTitle: "CoinCil: A Glorified Glossary",
    },
    {
      id: 3,
      title: "Font",
      subtitle: "NFT Design Challenge",
      link: "#",
      linkTitle: "jukejoint.eth ",
    },
  ];

  const variants = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="adventuresContainer">
      <div className="adventures" adventures-text="Adventures">
        <div className="experiments">
          <p className="heading">Experiments</p>
          {experiments.map((item) => (
            <motion.div
              key={item.id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: item.id * 0.3, type: "spring" }}
            >
              <p className="subtitle">{item.subtitle}</p>
              <p className="heading2">{item.title}</p>
              <a href={item.link}>{item.linkTitle}</a>
            </motion.div>
          ))}
        </div>
        <div className="work">
          <p className="heading">Work</p>
          {work.map((item) => (
            <motion.div
              key={item.id}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: item.id * 0.3 + 0.8, type: "spring" }}
            >
              <p className="subtitle">{item.subtitle}</p>
              <p className="heading2">{item.title}</p>
              <a href={item.link}>{item.linkTitle}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;
