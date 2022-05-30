import { useState } from "react";
import "./scss/App.scss";
import Header from "./components/Header";
import Confetti from "react-confetti";
import Main from "./components/Main";

export default function App() {
  const [tenzi, setTenzi] = useState<boolean>(false);

  return (
    <main>
      {tenzi && <Confetti />}
      <Header />
      <Main tenzi={tenzi} setTenzi={setTenzi} />
    </main>
  );
}
