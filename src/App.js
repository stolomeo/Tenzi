import React, { useState, useEffect } from "react";
import { generateDice, createDice } from "./components/Utils/Dice";
import Header from "./components/Header";
import Die from "./components/Die";
import Button from "./components/Button";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(createDice());
  const [tenzi, setTenzi] = useState(false);

  const rollDice = () => {
    if (tenzi) {
      setDice(createDice());
      setTenzi(false);
    } else {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateDice();
        })
      );
    }
  };

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstVal = dice[0].value;
    const allSameVal = dice.every((die) => die.value === firstVal);
    if (allHeld && allSameVal) {
      setTenzi(true);
    }
  }, [dice]);

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });
  return (
    <main>
      {tenzi && <Confetti />}
      <Header />
      <div className="dice-container">{diceElements}</div>
      <Button tenzi={tenzi} rollDice={rollDice} />
    </main>
  );
}
