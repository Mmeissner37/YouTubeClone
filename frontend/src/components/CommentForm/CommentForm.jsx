

const CommentForm = () => {
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="commentform">
            <form onSubmit={handleSubmit}>
                <label>Comment</label>
                <input type='text' /><br></br>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CommentForm;