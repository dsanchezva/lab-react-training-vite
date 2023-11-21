import { useState } from "react";

function LikeButton() {
  const [counterLeft, setCounterLeft] = useState(0);
  const [counterRigth, setCounterRigth] = useState(0);
  const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleIcrementLeft = () => {
    setCounterLeft(counterLeft + 1);
  };
  const handleIcrementRigth = () => {
    setCounterRigth(counterRigth + 1);
  };

  return (
    <div className="likeButtons">
      <button
        onClick={handleIcrementLeft}
        style={{ backgroundColor: colorArr[counterLeft] }}
      >
        {counterLeft} Likes
      </button>
      <button
        onClick={handleIcrementRigth}
        style={{ backgroundColor: colorArr[counterRigth] }}
      >
        {counterRigth} Likes
      </button>
    </div>
  );
}

export default LikeButton;
