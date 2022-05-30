import "../../scss/DiceContainer/DiceContainer.scss";

type Props = {
  diceElements: JSX.Element[];
};

export default function DiceContainer({ diceElements }: Props) {
  return <section>{diceElements}</section>;
}
