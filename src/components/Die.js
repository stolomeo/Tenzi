import React from "react";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

export default function Die(props) {
  function handleComponentSelection(value) {
    if (value === 1) {
      return <FaDiceOne />;
    } else if (value === 2) {
      return <FaDiceTwo />;
    } else if (value === 3) {
      return <FaDiceThree />;
    } else if (value === 4) {
      return <FaDiceFour />;
    } else if (value === 5) {
      return <FaDiceFive />;
    } else if (value === 6) {
      return <FaDiceSix />;
    }
  }
  const newComponent = handleComponentSelection(props.value);

  return (
    <div
      className={props.isHeld ? "die-num-active" : "die-num"}
      onClick={props.toggleIsHeld}
      key={props.id}
    >
      {newComponent}
    </div>
  );
}
