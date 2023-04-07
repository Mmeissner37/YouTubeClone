import { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm/CommentForm";

const VideoPlayer = () => { 
    const [comments, setComments] = useState ([])

    function addNewComment(comment) {
        let tempComments = [comment, ...comments];
        setComments(tempComments);
    }

    return (
        <div className="container">
            <div className="videoplayer">
            <iframe id="player" type="text/html" width="450" height="300" 
            src="https://www.youtube.com/embed/HmjUKMTOKig"></iframe>
        <CommentForm postUserComment={addNewComment}/>
        <br></br>
        <CommentList />
            </div>
        </div>
         
    )
}

export default VideoPlayer;
