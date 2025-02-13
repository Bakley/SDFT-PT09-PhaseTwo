// The root component is the App.jsx
// Component tree structure
    // Parent-child
    // communication happens in a one way flow

// Props stand for properties
// A component is a function that takes props as an argument and returns JSX
// Props are passed to a components like HTML attributes

function BlogContent(props) {
    return (
    
        <div>
            {props.variable()} 
        </div>
        
        
    )
}

function BlogPost() {
    return (
        <div>
            <BlogContent variable ={()=>{}}/>
        </div>
    )
}