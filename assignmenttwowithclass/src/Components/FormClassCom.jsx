import React,{Component} from 'react'

class FormClassCom extends Component{
    constructor(){
        super();
        this.state={
            fname:'',
            depart:'',
            rate:'',
            arr:[],
            show:false
        }
    }

    nameChange = (e) =>{this.setState({fname:e.target.value})}

    departChange = (e) =>{this.setState({depart:e.target.value})}

    rateChange = (e) =>{this.setState({rate:e.target.value})}

    submitData = (e) => {
        e.preventDefault();
        const updateArray = this.state.arr;
        updateArray.push({name:this.state.fname, depart:this.state.depart, rate:this.state.rate});
        this.setState({show:true,arr:updateArray});
        this.setState({fname:''});
        this.setState({depart:''});
        this.setState({rate:''});
    }

    render(){
        return(
            <div>
                <div style={{paddingTop:"50px"}}>
                    <form onSubmit={this.submitData} >
                        <label>Name : <input type="text" value={this.state.fname} onChange={this.nameChange}/></label><br/><br/>
                        <label className="inpield">Department : <input type="text" value={this.state.depart} onChange={this.departChange}/></label><br/><br/>
                        <label>Rating : <input type="text" value={this.state.rate} onChange={this.rateChange} /></label><br/><br/>
                        <button>Submit</button>
                    </form>
                </div>
                <div className='showData'>
                    {this.state.show && this.state.arr.map(item =>{
                        return(
                            <div className='itemDiv'>
                                <span>{`Name: ${item.name} | Department: ${item.depart} | Rating: ${item.rate}`}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default FormClassCom;