import React from "react";

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "green" : "white",
  };
  return (
    <div className="die-face" style={styles}>
      <div className="die-num" key={props.id}>
        {props.value}
      </div>
    </div>
  );
}
