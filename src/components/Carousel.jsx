import { useState } from "react";

function Carousel(props) {
  const { images } = props;
  const [carouselState, setCarouselState] = useState(0);
  let url = images[carouselState];
  const goLeft = () => {
    setCarouselState(carouselState - 1);
  };
  const goRigth = () => {
    setCarouselState(carouselState + 1);
  };

  return (
    <div>
      <button onClick={goLeft} disabled={carouselState == 0 ? true : false}>
        Left
      </button>
      <img src={url} alt="" />
      <button
        onClick={goRigth}
        disabled={carouselState == images.length - 1 ? true : false}
      >
        Right
      </button>
    </div>
  );
}

export default Carousel;
