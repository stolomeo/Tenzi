import "../../scss/RollDice/RollDice.scss";

type Props = {
  rollDice: () => void;
  tenzi: boolean;
};

export default function RollDice({ rollDice, tenzi }: Props) {
  return <button onClick={rollDice}>{tenzi ? "New Game" : "Roll Dice"}</button>;
}
