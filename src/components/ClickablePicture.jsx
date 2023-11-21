import React, { useState } from "react";

function ClickablePicture(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  };

  return (
    <div className="glassesContainer">
      <img src={props.img} alt="picture" onClick={handleClick} />
      <div className="glassesImg">
        <img
          src={props.imgClicked}
          alt="glasses"
          style={clicked ? { display: "block" } : { display: "none" }}
        />
      </div>
    </div>
  );
}

export default ClickablePicture;
