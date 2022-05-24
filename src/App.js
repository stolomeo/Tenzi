import React, { useState } from "react";
import Header from "./components/Header";
import Confetti from "react-confetti";
import Main from "./components/Main";
import styled from "styled-components";

export default function App() {
  const [tenzi, setTenzi] = useState(false);

  return (
    <Wrapper>
      {tenzi && <Confetti />}
      <Header />
      <Main tenzi={tenzi} setTenzi={setTenzi} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
  width: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 2rem;
`;
