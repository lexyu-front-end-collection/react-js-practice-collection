const test = "Tester";

function displayMsg() {
  return "WoW!";
}

function Hello({ name, msg, emoji }) {
  // console.log(props);
  // const { name, msg } = props;
  // console.log(name, msg);
  return (
    <div>
      <h1>
        {/* Hello {props.name}, {props.msg}! {test} , {10 + 20}, {displayMsg()} */}
        Hello {name}, {msg} {emoji}! {test} , {10 + 20}, {displayMsg()}
      </h1>
      <h1>Test</h1>
    </div>
  );
}

export default Hello;
