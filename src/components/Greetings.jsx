function Greetings(props) {
  const style = {
    border: "1px solid",
    margin: "5px",
  };
  if (props.lang === "de") {
    return (
      <div style={style}>
        <p>Hallo {props.children}</p>
      </div>
    );
  } else if (props.lang === "en") {
    return (
      <div style={style}>
        <p>Hello {props.children}</p>
      </div>
    );
  } else if (props.lang === "es") {
    return (
      <div style={style}>
        <p>Hola {props.children}</p>
      </div>
    );
  } else if (props.lang === "fr") {
    return (
      <div style={style}>
        <p>Bonjour {props.children}</p>
      </div>
    );
  }
}

export default Greetings;
