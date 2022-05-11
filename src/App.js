import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
export default function App() {
  const generateDice = () => {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  };
  const createDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice());
    }
    return newDice;
  };

  const rollDice = () => {
    setDice(createDice());
  };

  const [dice, setDice] = useState(createDice());

  const toggleIsHeld = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return id === die.id ? (die.isHeld = !die.isHeld) : die;
      })
    );
  };

  const diceElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        onClick={() => toggleIsHeld(die.id)}
      />
    );
  });
  return (
    <main>
      <h1 className="title">Tenzi</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="dice-container">{diceElements}</div>
      <button onClick={rollDice}>Roll Dice</button>
    </main>
  );
}
