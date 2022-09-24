import React,{Component} from 'react'

class ClassComponent extends Component{
    constructor(){
        super();
         this.state = {
            name:"",
            depart:"",
            rating: ""
        }
    }

    getName = (event) =>{this.setState({name:event.target.value})}
    getDepart = (event) =>{this.setState({depart:event.target.value})}
    getRate =(event) => {this.setState({rating:event.target.value})}
    getformValue = (event) => {
        localStorage.setItem("name",this.setState({name:event.target.value}));
        localStorage.setItem("department",this.setState({depart:event.target.value}));
        localStorage.setItem("rating",this.setState({rating:event.target.value}));
        console.log({name:event.target.value});
    }

    render(){
        return(
            <div>
                {/* <form> */}
                    <label>Name :<input type="text" className='firstInput' value={this.state.name}  onChange={this.getName}/></label>
                    <br/><br/>
                    <label>Department :<input type="text"className='secInput'value={this.state.depart} onChange={this.getDepart}/></label>
                    <br/><br/>
                    <label>Rating :<input type="number" className='thirdInput' value={this.state.rating} onChange={this.getRate}/></label>
                    <br/><br/>
                    <button  onClick={this.getformValue}>Submit</button>
                {/* </form> */}
            </div>
        )
    }
}

export default ClassComponent