import {memo, useState} from "react";

type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const {isFizz} = props
    console.log('Fizz is re-rendering')
    return (
        <span>{isFizz ? 'Fizz' : ''} </span>
    )
}

type BuzzProps = {
    isBuzz: boolean
    onClick: () => void
}

const Buzz = memo<BuzzProps>((props: BuzzProps) => {
    const {isBuzz, onClick} = props
    console.log('Buzz is re-rendering');
    return (
        <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
    )
})

export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFuzz = count % 3 === 0
    const isBuzz = count % 5 === 0
    const onClick = () => {
        console.log(`Buzzがクリックされました。 count = ${count}`);
    }
    console.log(`Parent is re-rendering, count = ${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}></button>
            <p>
                <Fizz isFizz={isFuzz}/>
                <Buzz isBuzz={isBuzz} onClick={onClick}/>
            </p>
        </div>
    )
}