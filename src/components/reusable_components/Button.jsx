export default function Button({ label, onClick, disable }){
    return (
        <>
            <button
                onClick={onClick}
                disabled={disable}
            >
                {label}
            </button>
        </>
    )
}
