import React from 'react';
import styled from "styled-components";


const VideoPresenter = ({video}) => {
    return ( <li>
        <img src={video.snippet.thumbnails.high.url} height={video.snippet.thumbnails.high.height} width={video.snippet.thumbnails.high.width} alt=""/>
        <h4>{video.snippet.title}</h4>
    </li> );
}
 
export default VideoPresenter;

