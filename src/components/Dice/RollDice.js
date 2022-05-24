import React from "react";
import "../../scss/Dice/RollDice.scss";

export default function Button({ rollDice, tenzi }) {
  return <button onClick={rollDice}>{tenzi ? "New Game" : "Roll Dice"}</button>;
}
