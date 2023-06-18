import React from 'react';
import styled from "styled-components";


const VideoPresenter = ({video}) => {
    return ( 
    <div className='vidpresenter'>
        <img src={video.snippet.thumbnails.default.url} height={video.snippet.thumbnails.default.height} width={video.snippet.thumbnails.default.width} alt=""/>
        <h4>{video.snippet.title}</h4>
    </div> );
}
 
export default VideoPresenter;

