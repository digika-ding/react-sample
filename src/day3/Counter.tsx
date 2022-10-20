import {useState} from "react";
import './day3.css'

type CounterProps = {
    initialValue: number;
}

const Counter = (props: CounterProps) => {
    const {initialValue} = props
    const [count, setCount] = useState(initialValue)
    return (
        <div>
            <p> Count: {count}</p>
            <button className={'button-18'} onClick={() =>
                setCount(count - 1)}>-
            </button>
            <button className={'button-18'} style={{backgroundColor: "aqua"}} onClick={() =>
                setCount((prevState) =>
                    prevState + 1
                )
            }>
                +
            </button>
        </div>
    )
}

export default Counter
