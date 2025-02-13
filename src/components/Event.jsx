function Event(props){
    console.log(props)

    return(
        <div>

            <h3>{props.year}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Event
