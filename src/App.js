import React, { useState, useEffect } from "react";
import { generateDice, createDice } from "./components/Utils/Dice";
import Die from "./components/Die";
import Header from "./components/Header";
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

  const toggleIsHeld = (id) => {
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
        toggleIsHeld={() => toggleIsHeld(die.id)}
      />
    );
  });
  return (
    <main>
      {tenzi && <Confetti />}
      <Header />
      <div className="dice-container">{diceElements}</div>
      <button className="btn-roll" onClick={rollDice}>
        {tenzi ? "New Game" : "Roll Dice"}
      </button>
    </main>
  );
}
