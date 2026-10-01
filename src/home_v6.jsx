import { useState } from "react";


function Home(){
    const [emp, setEmp]= useState({No:1, Name:"ABC", Address:"Pune"});

    const change= ()=>{
        console.log(emp);
    }

    const onTextChange= (args)=>{
        var copyOfEmp= {...emp};
        copyOfEmp[args.target.name]= args.target.value;
        setEmp(copyOfEmp);
    }

    


    return (
        <>
        
        <h1>No</h1>
        <input type="text" name="No" value={emp.No} onChange={onTextChange}  /> <br />
        <h1>Name</h1>
        <input type="text" name="Name"  value={emp.Name}  onChange={onTextChange}/> <br />
        <h1>Address</h1>
        <input type="text" name="Address" value={emp.Address} onChange={onTextChange} /> <br /> <br />
        <button className="btn btn-primary" onClick={change}>click Me</button>
       

        </>
    );
}

export default Home;