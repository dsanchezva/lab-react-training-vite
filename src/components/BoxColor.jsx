function BoxColor(props) {
  const colorRgb = "rgba(" + props.r + "," + props.g + "," + props.b + ")";
  const rHex = numHex(props.r);
  const gHex = numHex(props.g);
  const bHex = numHex(props.b);
  const colorHex = "##" + rHex + gHex + bHex;
  const style = {
    border: "1px solid",
    margin: "5px",
    backgroundColor: colorRgb,
  };
  return (
    <div style={style}>
      <p>{colorRgb}</p>
      <p>{colorHex}</p>
    </div>
  );
}

export default BoxColor;

function numHex(s) {
  let a = s.toString(16);
  if (a.length % 2 > 0) {
    a = "0" + a;
  }
  return a;
}
