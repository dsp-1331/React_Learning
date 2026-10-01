import { Component } from "react";

class Home extends Component{
   state= {
    emps:[
        {No: 1, Name:"Virat", Address:"Pune"},
        {No:2, Name:"Sachin", Address:"Mumbai"},
        {No:3, Name:"Rohit", Address:"Mumbai"},
        {No:4, Name: "Viru", Address: "Pune"}
    ]
   };

    CallMe(){
        console.log(this.state.emp);
    }

    componentDidMount(){
       
    }

    componentDidUpdate(){
       
    }

    onSelect(currentEmp){
        console.log(currentEmp);
    }


    render(){
        
       console.log("Render called");
       return (
        <div className="table-responsive" style={{margin:20}}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Name</td>
                        <td>Address</td>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        this.state.emps.map((e)=>{
                            return (<tr key={e.No}>
                                <td>{e.No}</td>
                                <td>{e.Name}</td>
                                <td>{e.Address}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>{this.onSelect(e)}} >select</button>
                                </td>
                            </tr>);

                        })
                    }

                </tbody>
            </table>

        </div>
       )
        
    }
}

export default Home;