import React from "react";
import { handleComponentSelection } from "../Utils/handleComponentSelection";
import "../../scss/Dice/Die.scss";

export default function Die({ value, isHeld, holdDice, id }) {
  const newComponent = handleComponentSelection(value);
  return (
    <div className={isHeld ? "die-active" : "die"} onClick={holdDice} key={id}>
      {newComponent}
    </div>
  );
}
