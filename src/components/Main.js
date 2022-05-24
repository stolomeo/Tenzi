import React, { useState, useEffect } from "react";
import { generateDice, createDice } from "./Utils/handleDice";
import Die from "./Dice/Die";
import RollDice from "./Dice/RollDice";
import DiceContainer from "./Dice/DiceContainer";

export default function Main({ tenzi, setTenzi }) {
  const [dice, setDice] = useState(createDice());

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
    <>
      <DiceContainer diceElements={diceElements} />
      <RollDice tenzi={tenzi} rollDice={rollDice} />
    </>
  );
}
