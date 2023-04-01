import { useState } from "react";
import localKey, { KEY } from "../localKey";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm/CommentForm";

const VideoPlayer = () => { 
    const [comments, setComments] = useState ([])

    function addNewComment(comment) {
        let tempComments = [comment, ...comments];
        setComments(tempComments);
    }

    return (
        <div className="videoplayer">
            <iframe id="player" type="text/html" width="325" height="200"
        src="https://www.youtube.com/embed/HmjUKMTOKig"></iframe>
        <CommentForm postUserComment={addNewComment}/>
        <br></br>
        <CommentList />
        </div> 
    )
}

export default VideoPlayer;
