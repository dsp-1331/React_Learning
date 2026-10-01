import { Component } from "react";

class Home extends Component{
    state= {emp: {No: 1, Name:"Virat", Address: "Pune"}, company:"BCCI"}

    CallMe(){
        var copyArr= {...this.state.emp, Address:"Latur"}
        this.setState({emp: copyArr})
        console.log("CallMe called...")
        debugger;
    }

    componentDidMount(){
        debugger;
        console.log("ComponentDidMount called");
    }

    componentDidUpdate(){
        debugger;
        console.log("ComponentDidUpdate called...");
    }

    shouldWeUpdate=true;
    shouldComponentUpdate(){
        debugger;
        console.log("ShouldComponentUpdate called");
        return this.shouldWeUpdate;

    }


    render(){
        debugger;
       console.log("Render called");
       return (
        <div style={{margin:20}}>
            <h1>No is {this.state.emp.No}</h1>
            <h1>Name is {this.state.emp.Name}</h1>
            <h1>Address is {this.state.emp.Address}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>{this.CallMe()}}>click me</button>

        </div>
       )
        
    }
}

export default Home;