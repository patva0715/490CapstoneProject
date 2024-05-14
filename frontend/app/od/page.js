'use client'
import { motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateString = (length) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export default function App() {
  const [cycleSpin, setCycleSpin] = useCycle("initial", "spin");
  const [odometerLetters, setOdometerLetters] = useState([]);
  const [odoWord, setOdoWord] = useState("XXXXX")
  const variants = {
    spin: {
      y: "calc(-100% + 68px)"
    },
    initial: {
      y: "calc(0% + 0px)"
    }
  };

  useEffect(() => {

    const letterArray = odoWord.split("");
    const odometerArray = [];

    letterArray.forEach((letter, index) => {
      const letters = generateString((index + 1) * 3) + letter;
      odometerArray.push(letters);
    });

    setOdometerLetters(odometerArray);
  }, [odoWord]);

  const createOdometer = () => {
    return odometerLetters.map((letter, index) => {
      return (
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate={cycleSpin}
          className="odometerItem"
          transition={{
            duration: 2
          }}
        >
          {letter}
        </motion.div>
      );
    });
  };

  return (
    <div className="app">
      <button onClick={() => setCycleSpin()}>Spin</button>
      <button onClick={() => setOdoWord("AAAAAA")}>A</button>
      <button onClick={() => setOdoWord("BBBBBB")}>B</button>
      <div className="odometer">{createOdometer()}</div>
    </div>
  );
}
