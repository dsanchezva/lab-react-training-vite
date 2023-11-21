import Rating from "./Rating";

function DriverCard(props) {
  const styleImg = {
    width: "100px",
    borderRadius: "100px",
  };

  return (
    <div className="driverCard">
      <div>
        <img src={props.img} alt="driver-photo" style={styleImg} />
      </div>

      <div>
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
