import {CounterProps} from "./CounterProps";


const Counter = (props: CounterProps) => {
    const {initialValue} = props
    let count = initialValue

    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={() => {
                --count
                console.log(count)
            }}> -
            </button>
            <button onClick={() => {
                ++count
                console.log((count))
            }}> +
            </button>
        </div>
    )
}

export default Counter