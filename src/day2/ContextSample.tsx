import React from 'react'

export type CounterProps = {
    initialValue: number;
    customValue: string;
}

export const Counter = (props: CounterProps) => {
    const { initialValue, customValue } = props
    return (
        <>
            <h1>{initialValue}</h1>
            <h1>{customValue}</h1>
        </>
    )
}

const Master = () => {
}

const TitleContext = React.createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    )
}

const Page = () => {
    const props = 'Hello Context'
    return (
        <TitleContext.Provider value={props}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page