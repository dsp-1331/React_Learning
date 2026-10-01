import { Component } from "react";

class Home extends Component{
    state= {emp: {No: 0, Name:"", Address: ""}, company:"BCCI"}

    CallMe(){
        console.log(this.state.emp);
    }

    componentDidMount(){
       
    }

    componentDidUpdate(){
       
    }

    onTextChange(event){
        
        console.log("Full event obj: ", event.target.value);
        var arrcopy= {...this.state.emp};
        arrcopy[event.target.name]= event.target.value;
        this.setState({emp: arrcopy});


    }


    render(){
        
       console.log("Render called");
       return (
        <div style={{margin:20}}>
            <b>No is </b>
            <input type="text" name="No" value={this.state.emp.No} onChange={(event)=>{this.onTextChange(event)}} /><br />
            <b>Name is </b>
            <input type="text" name="Name" value={this.state.emp.Name} onChange={(event)=> this.onTextChange(event)}/><br />
            <b>Address is </b>
            <input type="text" name="Address" value={this.state.emp.Address} onChange={(event)=>{this.onTextChange(event)}} /><br />
            <hr />
            <button className="btn btn-primary" onClick={()=>{this.CallMe()}}>click me</button>

        </div>
       )
        
    }
}

export default Home;