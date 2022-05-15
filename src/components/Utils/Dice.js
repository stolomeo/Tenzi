import { nanoid } from "nanoid";

export const generateDice = () => {
  return {
    id: nanoid(),
    value: Math.floor(Math.random() * 6) + 1,
    isHeld: false,
  };
};
export const createDice = () => {
  const newDice = [];
  for (let i = 0; i < 10; i++) {
    newDice.push(generateDice());
  }
  return newDice;
};
