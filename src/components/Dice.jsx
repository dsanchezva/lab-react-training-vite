import { useState } from "react";

function Dice() {
  const [dicePic, setDicePic] = useState("./src/assets/images/dice3.png");

  const handleDiceClick = () => {
    setDicePic("./src/assets/images/dice-empty.png");
    const randomDice = `./src/assets/images/dice${Math.floor(
      Math.random() * 7
    )}.png`;
    setTimeout(() => {
      setDicePic(randomDice);
    }, 1000);
  };
  return (
    <div>
      <img
        src={dicePic}
        alt=""
        onClick={handleDiceClick}
        style={{ width: "100px" }}
      />
    </div>
  );
}

export default Dice;
