import Hello from "./components/Hello";
import Imutability from "./components/Imutability";
import Props from "./components/Props";
import ListAndKey from "./components/ListAndKey";
import Header from './components/Header'
import Footer from './components/Footer'

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
      <Props
        seatNumbers={seatNumbers}
        human={human}
      ></Props>
      <ListAndKey></ListAndKey>
      <Header></Header>

      <Footer></Footer>
    </>
  );
}

export default App;
