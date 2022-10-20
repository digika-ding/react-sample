import React, {useCallback, useState} from "react";

type ButtonProps = {
    onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
    const {onClick} = props
    console.log("Decrement Button re-rendering");
    return (
        <button onClick={onClick}> - </button>
    )
}

const IncrementButton = React.memo((props: ButtonProps) => {
    const {onClick} = props
    console.log("Increment Button re-rendering");
    return (
        <button onClick={onClick}> + </button>
    )
})

const DoubleButton = React.memo((props: ButtonProps) => {
    const {onClick} = props
    console.log("Double Button re-rendering");
    return (
        <button onClick={onClick}> x2 </button>
    )
})

export const ParentUseMemo = () => {
    const [count, setCount] = useState(0)
    const decrement = () => setCount(count => count - 1)
    const increment = () => setCount(count => count + 1)
    const double = useCallback(() => setCount(c => c * 2), [])

    return (
        <div>
            <p>Count: {count}</p>
            <DecrementButton onClick={decrement}/>
            <IncrementButton onClick={increment}/>
            <DoubleButton onClick={double}/>
        </div>
    )
}