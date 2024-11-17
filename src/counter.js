import { useState } from "react"
import './index.css';



function Counter(){

    var [count,setmyname] = useState(0);

    function Increment(){
        setmyname(count = count+1);
        console.log(count)
    }

    function Decrement(){
        setmyname(count = count-1);
        console.log(count)
    }
    function Reset(){
        setmyname(count = 0);
        console.log(count)
    }
    
    return(
       
           
            <div className="counter_app">
            <h1>Counter App</h1>
            <h1 className="count">{count}</h1>
            <div className="button_class">
            <button className="increment" onClick={Increment}>Increment</button>
            <button className="decrement" onClick={Decrement}>Decrement</button>
            <button className="reset" onClick={Reset}>Reset</button>
            </div>
            </div>

          
       
    )
}

export default Counter