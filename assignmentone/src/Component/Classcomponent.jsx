import React, {Component} from 'react'

class Classcomponent extends Component {
    constructor(){
        super();
        this.state ={
            showResults: false,
            setShowResults:false
        }
    }
    hideShow = () => {
        const current = this.state.showResults;
        this.setState({showResults:!current, setShowResults:true});
    }
    render(){
       return (
        <div className='compClass' onClick={this.hideShow}>
            <div className='classFunc'>
                <p>To see styling in class component</p>
            </div>
            {this.state.showResults && (<div className='contDivcomp'>
                    <p className='head'>This is created using functional Component</p>
                    <p className='secPara'>This is done using External CSS </p>
                    <p style={{color:"blue",fontSize:'25px'}}>This is done using inline CSS </p>
                </div>)}
        </div>  
       )
    }

}

export default Classcomponent;