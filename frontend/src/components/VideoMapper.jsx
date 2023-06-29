import React from "react";
import VideoPresenter from "./VideoPresenter";
import { Link } from "react-router-dom";

const VideoMapper = ({videoArray, setVideos}) => {
    return (
        <div className="video-flex">
            {videoArray.map(el => <Link to={`/video/${el.id.videoId}`} onClick ={() => setVideos(el.id.videoId)}>
                <VideoPresenter key={el.id.videoId} video = {el} />
                </Link>)}
        </div>

    )
}

export default VideoMapper;