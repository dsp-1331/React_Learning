import { Component } from "react";

class Home extends Component{
    state={
        emp: {No:0, Name: "", Address:""},
        emps: [],
        message:""
        
    };

    componentDidMount(){
        this.setState({message: "Data in progress"});
        console.log("componentdidmount called... fetching data from server")
        var url= `http://localhost:5173/data.json`;
        var helper= new XMLHttpRequest();
        helper.onreadystatechange= (url)=>{
            if(helper.readyState== 4 && helper.status==200){
                debugger;
                var parseData= JSON.parse(helper.responseText);
                console.log("Data fetched successfully");
                this.setState({emps: parseData});
                this.setState({message: "Data fetch complete"});
                this.setState({message:""});
            }


        };
        helper.open("GET",url );
        helper.send();    
    }

    onTextChange(e){
        var copyEmp= {...this.state.emp};
        copyEmp[e.target.name]= e.target.value;
       this.setState({emp: copyEmp})
    }

    updateRecord(){
        var copyOfemps= [...this.state.emps];
        copyOfemps.map ((e)=>{
            if(e.No== this.state.emp.No){
                e.Name= this.state.emp.Name;
                e.Address= this.state.emp.Address;
            }
        });
        this.setState({emps: copyOfemps,
            emp: {No: 0, Name:"", Address:""}

        });
        
    }

    addRecord(){
        var copyemps= [...this.state.emps];
        copyemps.push({...this.state.emp});
        this.setState({
            emps: copyemps, 
            emp: {No:0, Name:"", Address:""}

        });
        
    }
    Edit(e){
       debugger;

        this.setState({emp:e});

    }
    Delete(empToDelete){
        debugger;
        var filteredArray=
        this.state.emps.filter((e)=>{
            return e.No !=  empToDelete.No
        });
        this.setState({emps:filteredArray});        
    }


    render(){
        debugger;
        console.log("Render called....");
        return (
            <div className="container">
                <hr />
                <div className=" alert alert-warning">{this.state.message}</div>
                <hr />
                <div className="table-responsive">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>No</td>
                            <td>
                                <input type="text" name="No" value={this.state.emp.No} onChange={(event)=>{this.onTextChange(event)}} />
                            </td>
                        </tr>
                         <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="Name" value={this.state.emp.Name} onChange={(event)=>{this.onTextChange(event)}} />
                            </td>
                        </tr>
                         <tr>
                            <td>Address</td>
                            <td>
                                <input type="text" name="Address" value={this.state.emp.Address} onChange={(event)=>{this.onTextChange(event)}} />
                            </td>
                        </tr>
                        
                        <tr >
                            <td >
                                <button className="btn btn-primary" onClick={()=>{this.addRecord()}} >Add Record</button>
                                
                            </td>
                            <td>
                                <button className=" btn btn-primary" onClick={()=> {this.updateRecord()}}>Update Record</button>
                            </td>
                        </tr>

                    </tbody>

                </table>
                </div>


                <hr />
                <hr />
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.emps.map((e)=>{
                                    return (
                                        <tr key={e.No}>
                                            <td>{e.No}</td>
                                            <td>{e.Name}</td>
                                            <td>{e.Address}</td>
                                            <td>
                                                <button className="btn btn-warning" onClick={()=>{this.Edit(e)}}>Edit</button>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={()=>{this.Delete(e)}}>Delete</button>
                                            </td>
                    
                                        </tr>

                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        )

    }
}

export default Home;
