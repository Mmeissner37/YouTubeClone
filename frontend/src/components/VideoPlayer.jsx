import { useState } from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm/CommentForm";
// import {KEY} from "./API_KEY/API_KEY";
// import axios from "axios";

const VideoPlayer = () => { 
    const [comments, setComments] = useState ([]);
    // const [videos, setVideos] = useState([]);
    const [videoID, setVideoID] = useState("HmjUKMTOKig");

    // const getVideos = async() => {
    //     await axios.get(`https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=HmjUKMTOKig&part=snippet&maxresults=5=${KEY}`)
    //     .then(response => {setVideos(response.data.items)});
    // };


    function addNewComment(comment) {
        let tempComments = [comment, ...comments];
        setComments(tempComments);
    };

    return (
        <div className="container">
            {/* <button onClick={() => {getVideos()}}>Get More Videos!</button> */}
            <div className="videoplayer">
            <iframe 
                title="main-vid-player"
                id="player" 
                type="text/html" 
                width="450" 
                height="300" 
                src={`https://www.youtube.com/embed/${videoID}`}>
            </iframe>
        <CommentForm postUserComment={addNewComment}/>
        <br></br>
        <CommentList />
            </div>
        </div>
         
    )
}

export default VideoPlayer;
