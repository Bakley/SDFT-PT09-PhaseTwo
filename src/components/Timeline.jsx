import Event from "./Event"

function Timeline() {
    const events = [
        { year: "1905", desc: "Content a"},
        { year: "1910", desc: "content b"},
        { year: "1905", desc: "Content a"},
        { year: "1910", desc: "content b"},
        { year: "1905", desc: "Content a"},
        { year: "1910", desc: "content b"},
        { year: "1905", desc: "Content a"},
        { year: "1910", desc: "content b"},
        { year: "1905", desc: "Content a"},
        { year: "1910", desc: "content b"},
        { year: "1905", desc: "Content a"},
        { year: "1910", desc: "content b"},
    ]

    return(
        <>
            <h3>Timeline</h3>
            {events.map((data, index) => (
                <Event 
                    key={data.index} 
                    year={data.year}
                    desc={data.desc}
                />
            ))}
        </>
    )
}

export default Timeline