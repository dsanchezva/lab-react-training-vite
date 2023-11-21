function IdCard(props) {
  const date = JSON.stringify(props.birth);
  return (
    <div id="cardStyles">
      <div id="cardImg">
        <img src={props.picture} alt="picture" />
      </div>
      <div>
        <p>
          <strong>First name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Las name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Heigth: </strong> {props.height}
        </p>
        <p>
          <strong>Birth: </strong> {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
