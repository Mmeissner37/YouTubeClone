import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoPresenter from "../../components/VideoPresenter";


const VideoPage = () => {
    // const [showVideo, setShowVideo] = useState([]);

     return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <VideoPlayer />
            </div>
        </div>
    )

}

export default VideoPage
