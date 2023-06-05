import React from 'react';
import styled from "styled-components";


const VideoPresenter = ({video}) => {
    return ( 
    <div>
        <img src={video.snippet.thumbnails.medium.url} height={video.snippet.thumbnails.medium.height} width={video.snippet.thumbnails.medium.width} alt=""/>
        <h4>{video.snippet.title}</h4>
    </div> );
}
 
export default VideoPresenter;

