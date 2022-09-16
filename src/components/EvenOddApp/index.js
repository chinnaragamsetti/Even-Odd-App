// Write your code here
import {Component} from '.react'
import './index.css'

class EvenOddApp extends Component{
    const state={count:0}
    onIncrement=()=>{
        randomNumber= Math.floor(Math.random() * 100);
        this.setState({count:randomNumber})
    }

    render(){
        const {count}=this.state;
        status=count%2
        return(
                <div className="mainbg">
                    <div className="innerbg">
                        <h1 className="h1">Count <span>{count}</span></h1>
                        <p className="p1"> Count is {status?"even":"odd"}</p>
                        <button className="butt" type='button' onClick={this.onIncrement}>Increment</button>
                        <p className="p2">*Increase By Random Number Between 0 to 100</p>
                    </div>
                    
                </div>
        )
    }
}

export default EvenOddApp