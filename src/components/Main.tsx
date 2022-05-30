import { useState, useEffect } from "react";
import { generateDice, createDice } from "./utils/handleDice";
import Die from "./DiceContainer/Die";
import RollDice from "./RollDice/RollDice";
import DiceContainer from "./DiceContainer/DiceContainer";

type Props = {
  tenzi: boolean;
  setTenzi: (tenzi: boolean) => void;
};

export default function Main({ tenzi, setTenzi }: Props) {
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

  const holdDice = (id: string) => {
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
  }, [dice, setTenzi]);

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
