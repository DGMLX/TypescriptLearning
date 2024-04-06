import Counter from "./components/Counter"
import User from "./components/User"
import Formulario from "./components/Formulario"
import TimerPadre from "./components/TimerPadre"

function App(){

  return (
    <>
    <h1 className="text-center mb-5 text-3xl mt-5">REACT + TYPESCRIPT</h1>
      <Counter/>
      <hr />
      <User/>
      <hr />
      <div className="mt-5 mb-5">
        <h1 className="text-2xl">Timer - UseEffect & UseRef</h1>

        </div>
      <TimerPadre/>
      <hr />
      <Formulario/>
    </>
  )
}

export default App
