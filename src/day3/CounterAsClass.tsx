import React from "react";
import {CounterProps} from "./CounterProps";

type CounterState = {
    count: number;
}
class Counter extends React.Component<CounterProps, CounterState> {
    state: CounterState ={
        count: this.props.initialValue
    }

    render() {
        return (
            <div>
                <p> Count: {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count - 1})}> - </button>
                <button onClick={() => this.setState({count: this.state.count + 1})}> + </button>
            </div>
        )
    }
}

export default Counter