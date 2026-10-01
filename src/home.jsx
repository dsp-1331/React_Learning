import { useEffect, useState } from "react";


function Home(){
    const [emp, setEmp]= useState({No:0, Name:"", Address:""});
    const [emps, setEmps] = useState([]);
    const [msg, setMsg]= useState("");

    useEffect(()=>{
        console.log("Code like component did mount");
        setMsg("Data is Loading...");
        var url= `http://localhost:5173/data.json`;
        var helper= new XMLHttpRequest();
        helper.onreadystatechange= ()=>{
            if(helper.readyState==4 && helper.status==200){
                setMsg("Data Fetched successfully...");
                var fetchData= JSON.parse(helper.responseText);
                setEmps(fetchData);
                setMsg("");

            }
        }
        helper.open("GET", url);
        helper.send();


    },[]);

    const change= ()=>{
        console.log(emp);
    }

    const onTextChange= (args)=>{
        var copyOfEmp= {...emp};
        copyOfEmp[args.target.name]= args.target.value;
        setEmp(copyOfEmp);
    }
    const addRecord=()=>{
        var copyOfEmps= [...emps];
        copyOfEmps.push({...emp});
        setEmps(copyOfEmps);
        setEmp({No:0, Name:"", Address:""});

    }

    const updateRecord= ()=>{
       var copyOfEmps= [...emps];
        for(let i=0; i<copyOfEmps.length; i++){
            var e= copyOfEmps[i];
            if(e.No== emp.No){
                e.Name= emp.Name;
                e.Address= emp.Address;
                break;
            }
        }
        setEmps(copyOfEmps);
        setEmp({No:0, Name:"", Address:""});
    }

    const Edit= (e)=>{
        setEmp(e);
    }

    const Remove= (empToRemoved)=>{
        var filterEmps= emps.filter((e)=>{return e.No!= empToRemoved.No})
        setEmps(filterEmps);
    }

    


    return (
        <>
        <div className="container">
             <div className="alert alert-warning">{msg}
            </div>

            <hr />

            <div className=" table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>
                                <input type="text" name="No" value={emp.No}   onChange={onTextChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="Name" value={emp.Name}  onChange={onTextChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" name="Address" value={emp.Address}  onChange={onTextChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-primary" onClick={addRecord}>Add</button>
                            </td>
                            <td>
                                <button className="btn btn-success" onClick={updateRecord}>Update</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <hr />
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Name</td>
                                <td>Address</td>
                                <td>Edit</td>
                                <td>Delete</td>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emps.map((e)=>{
                                    return(
                                    <tr key={e.No}>
                                        <td>{e.No}</td>
                                        <td>{e.Name} </td>
                                        <td>{e.Address} </td>
                                        <td><button className="btn btn-warning" onClick={()=>{Edit(e) }}>Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>{Remove(e) }}>
                                        Delete
                                    </button></td>

                                    </tr>
                                 );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                


            </div>

        </div>
        
      
       

        </>
    );
}

export default Home;