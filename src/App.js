import Counter from "./counter"
import { useState } from "react"
import Random from "./random"


function App(){
 
   

  var [counter,SetCounterIsActive] = useState(true);

  function CounterActive(){
    SetCounterIsActive(true);
       
    }

    function RandomActive(){
      SetCounterIsActive(false);
      
    }
  

return(
  <div className="screen">
<div className="container_app">
  <button className="counter_view"  onClick={CounterActive}>Show Counter</button>
  <button className="random_view" onClick={RandomActive}>Show Random</button>
  </div>
   <div>{counter ? <Counter /> : <Random />}</div>

</div>

  )
}

export default App