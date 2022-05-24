import React, { useState } from "react";
import Header from "./components/Header";
import Confetti from "react-confetti";
import Main from "./components/Main";

export default function App() {
  const [tenzi, setTenzi] = useState(false);

  return (
    <main>
      {tenzi && <Confetti />}
      <Header />
      <Main tenzi={tenzi} setTenzi={setTenzi} />
    </main>
  );
}
