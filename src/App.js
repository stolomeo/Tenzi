import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
export default function App() {
  const generateDice = () => {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
    };
  };
  const createDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDice());
    }
    return newDice;
  };

  const [dice, setDice] = useState(createDice());

  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} />;
  });
  return (
    <main>
      <h1 className="title">Tenzi</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="dice-container">{diceElements}</div>
    </main>
  );
}
