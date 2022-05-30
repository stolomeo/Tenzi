import { handleComponentSelection } from "../utils/handleComponentSelection";
import "../../scss/DiceContainer/Die.scss";

type Props = {
  value: number;
  isHeld: boolean;
  holdDice: () => void;
};

export default function Die({ value, isHeld, holdDice }: Props) {
  const newComponent = handleComponentSelection(value);
  return (
    <div className={isHeld ? "die-active" : "die"} onClick={holdDice}>
      {newComponent}
    </div>
  );
}
