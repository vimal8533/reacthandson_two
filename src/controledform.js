import React, { Component } from "react";
import './App.css';


class FormClass extends Component{
    state={
        Name:'',
        Dept:'',
        rate:'',
        Data: []

    }



    changehandle = (event)=>{
        event.preventDefault();
        this.setState({[event.target.name] : event.target.value});
    }
    clickhandle =(event) =>{
        event.preventDefault();
        let newobj={
            name:this.state.Name,
            dept:this.state.Dept,
            rate:this.state.rate
        }
        this.state.Data.push(newobj);
        this.setState({Data: this.state.Data})
      
    }

    render(){
        return(
            <>
                <form>
                 <label htmlFor="name">Name: </label>
                <input type="text" id="name" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changehandle} required/> <br/>
                <label htmlFor="dept">Department: </label>
                <input type="text" id="dept" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changehandle} required/> <br/>
                <label htmlFor="rate">Rating: </label>
                <input type="number" id="rate" placeholder="Rate Us" name="rate" value={this.state.rate} onChange={this.changehandle} required/> <br/>
                <button onClick={this.clickhandle}>Submit</button>
                </form>    
                
                    <>
                    <div className="parent_box">

                    {this.state.Data.map((item,index) =>{
                    return(
                        <>
                        <div className="content_box">
                        <span>Name:{item.name} | Department:{item.dept}|Rating:{item.rate}</span> 
                        </div>
                       
                         </>
                    )
                })
                }
                    </div> 

                    </>
                    
                   
               
            
            </>
        )
    }
}

export default FormClass;