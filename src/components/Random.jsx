function Random(props) {
  const style = {
    border: "1px solid",
    margin: "5px",
  };
  let random = Math.floor(Math.random() * props.max);
  return (
    <div style={style}>
      <p>
        Random value between {props.min} and {props.max} = {random}
      </p>
    </div>
  );
}
export default Random;
