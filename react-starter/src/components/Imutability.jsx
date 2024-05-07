function Hello(props) {
  // props.name = "Replace"; // Error : Uncaught TypeError: "name" is read-only
  return (
    <div>
      <h1>
        Hello {props.name}, {props.msg} {props.emoji}!
      </h1>
    </div>
  );
}

export default Hello;
