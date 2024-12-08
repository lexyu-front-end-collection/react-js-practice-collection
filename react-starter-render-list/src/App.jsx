import List from "./List"
import List2 from "./List2"

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 100 },
    { id: 2, name: "mango", calories: 50 },
    { id: 3, name: "orange", calories: 75 },
    { id: 4, name: "banana", calories: 125 },
    { id: 5, name: "pineapple", calories: 200 }];

  // const fruits = [];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 }];

  return (
    <>
      {/* <List></List> */}
      {fruits.length > 0 ? <List2 items={fruits} category="FRUITS"></List2> : null}
      {vegetables.length > 0 && <List2 items={vegetables} category="VEGETABLES"></List2>}

    </>
  )
}

export default App
