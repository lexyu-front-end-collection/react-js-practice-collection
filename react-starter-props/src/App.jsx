import Student from './Student.jsx'

function App() {

  return (
    <>
      <Student name="L" age={50} isStudent={true}></Student>
      <Student name="X" age={20} isStudent={true}></Student>
      <Student name="Z" age={40} isStudent={false}></Student>
      <Student></Student>
    </>
  )
}

export default App
