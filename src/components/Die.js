import React from "react";
import { handleComponentSelection } from "./Utils/handleComponentSelection";

export default function Die(props) {
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
