const Hello = () => {
    const onClick = () => {
        alert('Hello')
    }
    const text = 'Hello React'

    return (
        <div onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

export default Hello