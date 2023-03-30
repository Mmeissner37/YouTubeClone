import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import useAuth from "../../hooks/useAuth";
import CommentList from "../../components/CommentList";
import axios from "axios";


const VideoPage = () => {
    const [showVideo, setShowVideo] = useState([]);

     return (
        <div>
            <VideoPlayer />
        </div>
    )

}

export default VideoPage
