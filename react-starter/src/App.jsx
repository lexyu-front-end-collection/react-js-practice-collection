import Hello from "./components/Hello";
import Imutability from "./components/Imutability";
import ArraysAndObject from "./components/ArraysAndObject";
import Fruits from "./components/Fruits";

function App() {
  const seatNumbers = [1, 4, 7];

  const human = {
    name: "First",
    msg: "Born",
    emoji: "🎡",
    seatNumbers: [1, 4, 7],
  };

  return (
    <>
      <Hello name="ABC" msg="Here" emoji="💥" />
      <Hello name="XYZ" msg="Nothing" emoji="🎇" />
      <Imutability name="HJK" msg="WoW" emoji="✨"></Imutability>
      <ArraysAndObject
        seatNumbers={seatNumbers}
        human={human}
      ></ArraysAndObject>

      <Fruits></Fruits>
    </>
  );
}

export default App;
