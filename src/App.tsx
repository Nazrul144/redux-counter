import { useDispatch, useSelector } from "react-redux"
import { Button } from "./components/ui/button"
import { decrement, increment } from "./redux/features/counters/counterSlice"


function App() {

  const counters = useSelector((store)=> store.counters)
  const dispatch = useDispatch()

  const handleIncrement = ()=>{
    dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }

  return (
   <>
   <div>
    <h1 className="text-4xl mt-2 font-bold text-center">Counter</h1>
    <h3 className="text-center font-bold text-red-400 mt-6 mb-3">{counters.value}</h3>
    <div className="flex justify-center items-center gap-2 ">
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
   </div>
   </>
  )
}

export default App
