import {useReducer} from "react";

enum Action {DECREMENT = 0, INCREMENT = 1, DOUBLE = 2, RESET = 3 }

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case Action.DECREMENT:
            return currentCount - 1;
        case Action.INCREMENT:
            return currentCount + 1;
        case Action.DOUBLE:
            return currentCount * 2;
        case Action.RESET:
            return 0
        default:
            throw new Error(action)
    }
}
type CounterProps = {
    initialValue: number;
}
const Counter = (props: CounterProps) => {
    const {initialValue} = props
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(Action.INCREMENT)}> + </button>
            <button onClick={() => dispatch(Action.DECREMENT)}> - </button>
            <button onClick={() => dispatch(Action.DOUBLE)}> x2 </button>
            <button onClick={() => dispatch(Action.RESET)}> 0 </button>
        </div>
    )
}
export default Counter