import Comments from "./Comments"

function CommentList() {
    const comment = ["great work!", "Really useful", "additional tetx"]

    return (
        <div>
            <h3>Comments</h3>
            {comment.map((comment, index) => (
                <Comments key={index} text={comment} />
            ))}
        </div>
    )
}

export default CommentList