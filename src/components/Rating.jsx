function Rating(props) {
  if (props.children < 1) {
    return <p>☆☆☆☆☆</p>;
  } else if (props.children >= 1 && props.children < 2) {
    return <p> ★☆☆☆☆</p>;
  } else if (props.children >= 2 && props.children < 3) {
    return <p> ★★☆☆☆</p>;
  } else if (props.children >= 3 && props.children < 4) {
    return <p> ★★★☆☆</p>;
  } else if (props.children >= 4 && props.children < 5) {
    return <p> ★★★★☆</p>;
  } else if (props.children >= 5) {
    return <p> ★★★★★</p>;
  }
}

export default Rating;
