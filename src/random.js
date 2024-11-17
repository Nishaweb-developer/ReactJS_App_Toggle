import { useState } from "react"
import './index.css';


// export default function App() {
//     const counter_ref = useRef(null);
//     const random_ref = useRef(null);
    
//     function show_counter() {
//       firstCatRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'nearest',
//         inline: 'center'
//       });
//     }


function Random(){
   

    var [number,SetRandom] = useState(0);

    function GetRandom(){
        SetRandom(Math.floor(Math.random() *10));
        console.log(number);
    }
    return(
        <div className="random_center">
            <div className="random_app">
            <h1>Random App</h1>
            <button className="random" onClick={GetRandom}>Random Generator</button>
            <p className="random_number">{number}</p>
            </div>
        </div>
    )
}

export default Random