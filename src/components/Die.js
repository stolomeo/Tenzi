import React from "react";

export default function Die(props) {
  return (
    <div className="die-face">
      <div className="die-num" key={props.id}>
        {props.value}
      </div>
    </div>
  );
}
