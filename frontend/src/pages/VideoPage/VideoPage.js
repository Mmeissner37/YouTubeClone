import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import useAuth from "../../hooks/useAuth";

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
