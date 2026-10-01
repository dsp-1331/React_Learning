import { useState } from "react";

function Home(){
    const [fname, setFname]= useState("Dipali");

    const change= ()=>{
        console.log("State changed... like setState");
        setFname("Ragini");
    }

    console.log("Like render called...");
    return(
         <>
         <h1>Hello {fname}</h1>
         <button onClick={change}>click Me</button>
    </>
    );
   



}

export default Home;