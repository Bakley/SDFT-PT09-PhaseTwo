// Event handling

const Counter = () => {
    const handleClick = () => {
        alert("You clicked me!")
    }

    return (
        <>
        <button
            onClick={handleClick}
            >
            Click Me
        </button>
        </>
    )
}