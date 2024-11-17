import { useState } from "react";
import ReactDOM from "react-dom/client"
import App from "./App"

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App></App>
);

// var myname ="Nishaa";

// function ChangeName(){
//   var [myname,setmyname]= useState("Nisha")

//   function Change(){
//   setmyname("Nisha Change");
   
//   }

//   return(
//     <div>
//       <h1>{myname}</h1>
//       <button onClick={Change}>Change</button>
//     </div>
//   )
// }

// root.render(
//   <ChangeName></ChangeName>
// )