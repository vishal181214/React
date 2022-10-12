import React,{Component, PureComponent, useState} from 'react'

export default class PureComponentExample extends PureComponent {
    constructor(props){
        super(props)
        this.state ={
            name:'code'
        }
    }

    setName(){
        this.setState({name:"Test"})
    }

  render() {
    console.log("Re-rendered");
    return (
      // <div>
      //   <h2></h2>
      //   <button onClick={()=>this.setName()} className='btn btn-primary'>Update</button>
      // </div>
      <div className='card text-center mt-5'>
      <div className='card-header'><h2>Pure Component</h2></div>
      <div className="card-body">
        <h2 className='card-title p-1'>{this.state.name}</h2>
        <button onClick={()=>this.setName()} className='btn btn-primary'>Update</button>
      </div>
      <div className='card-footer text-muted'>
        <h6>ReactJS Pure Component Class compares current state and props with new props and states(Shallow Comparison between states and props) to decide whether the React component should re-render itself or  Not.</h6>
        <h5>Syntax</h5>
            <h6>export default class Test extends React.PureComponent</h6>
      </div>
    </div>
    )
  }
}
