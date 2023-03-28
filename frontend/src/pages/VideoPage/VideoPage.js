import { useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";


const VideoPage = () => {
    const [showVideo, setShowVideo] = useState([]);


    return (
        <div>
            <VideoPlayer />
        </div>
    )

}

export default VideoPage()