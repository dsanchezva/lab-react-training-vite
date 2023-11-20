function CreditCard(props) {
  const backgroundColor = props.bgColor;
  let imgSrc = "";
  if (props.type === "Visa") {
    imgSrc = "./src/assets/images/visa.png";
  } else if (props.type === "Master Card") {
    imgSrc = "./src/assets/images/master-card.svg";
  }
  //change the card number
  const cardNumber = props.number;
  let cardNumberHidden = "";
  for (let i = 0; i < cardNumber.length - 4; i++) {
    cardNumberHidden += "*";
  }
  cardNumberHidden += cardNumber.slice(
    cardNumber.length - 4,
    cardNumber.length
  );

  const style = {
    backgroundColor: backgroundColor,
  };
  return (
    <div id="creditCard" style={style}>
      <img src={imgSrc} alt="logo" />
      <h3>{cardNumberHidden}</h3>
      <p>
        Expired: {props.expirationMonth}/{props.expirationYear}{" "}
        <span>{props.bank}</span>
      </p>
      <h3>{props.owner}</h3>
    </div>
  );
}

export default CreditCard;
