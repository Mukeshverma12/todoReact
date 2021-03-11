import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './plan.js'



export default class App extends Component {
  state = {
    items:[],
    text:""
  }
  handlechange = e =>{
    this.setState({text: e.target.value})
  }
  handleadd = e =>{
    if (this.state.text !== ""){
      const items=[...this.state.items, this.state.text];
      this.setState({items:items , text:""});
    }
   
  }

  handledelete = id =>{
   console.log("delete", id)
   const olditems=[...this.state.items]
   const items=olditems.filter((element,i) =>{
     return i !== id

   })
  console.log(items);
  }

  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 text-white shadow-lg p-3 mx-auto">
            <h1 className="text-center">Today plan</h1>
            <br></br>
            <div className='row'>
              <div className="col-9">
                <input type="text" value={this.state.text} onChange={this.handlechange} className='form-control' placeholder="Enter the plan" />
              </div>
              <div className="col-2">
                <button onClick={this.handleadd} type="button" name="" id="" className="btn btn-primary px-5 font-weight-bold">add</button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row ml-5 mt-5">
                  {
                    this.state.items.map((value, i) => {
                      return <Plan key={i} id={i} sendData={this.handledelete(i)} value={value} />
                                       })
                                       
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


