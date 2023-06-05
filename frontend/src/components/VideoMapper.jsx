import React from "react";
import VideoPresenter from "./VideoPresenter";


const VideoMapper = ({videoArray}) => {
    return (
        <div className="video-flex">
            {videoArray.map(el => <VideoPresenter key={el.id.videoId} video = {el} />)}
        </div>

    )
}

export default VideoMapper;