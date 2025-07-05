import { Button } from "./components/ui/button"


function App() {


  return (
   <>
   <div>
    <h1 className="text-4xl mt-2 font-bold text-center">Counter</h1>
    <h3 className="text-center font-bold text-red-400 mt-6 mb-3">0</h3>
    <div className="flex justify-center items-center gap-2 ">
      <Button>Increment</Button>
      <Button>Decrement</Button>
    </div>
   </div>
   </>
  )
}

export default App
