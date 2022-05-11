import React from "react";
import Die from "./components/Die";
export default function App() {
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
