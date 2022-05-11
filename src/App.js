import React from "react";
import Die from "./components/Die";
export default function App() {
  const allNewDice = () => {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
  };
  console.log(allNewDice());

  return (
    <main>
      <h1 className="title">Tenzi</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="dice-container">
        <Die />
      </div>
    </main>
  );
}
