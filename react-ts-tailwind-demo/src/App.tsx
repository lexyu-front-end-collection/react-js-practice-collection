import { dummyData } from "./data/todos"

function App() {

  return (
    <div className="py-10 h-screen">
      <h1 className="text-3xl font-bold text-center">Setup Demo(Todos)</h1>
      <div className="mx-auto max-w-lg">
        <div className="space-y-2">
          {dummyData.map((item) => (
            <p key={item.id} className="text-lg">
              <p>{item.title} - {String(item.completed)}</p>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
