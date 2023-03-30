import { useState } from "react";
import localKey, { KEY } from "../localKey";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm/CommentForm";

const VideoPlayer = () => { 
    const [] = useState ([])

    return (
        <div className="videoplayer">
            <iframe id="player" type="text/html" width="325" height="200"
        src="https://www.youtube.com/embed/HmjUKMTOKig"></iframe>
        <CommentList />
        </div> 
    )
}

export default VideoPlayer;
