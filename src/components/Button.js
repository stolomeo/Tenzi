import React from "react";

export default function Button(props) {
  return (
    <button className="btn-roll" onClick={props.rollDice}>
      {props.tenzi ? "New Game" : "Roll Dice"}
    </button>
  );
}
