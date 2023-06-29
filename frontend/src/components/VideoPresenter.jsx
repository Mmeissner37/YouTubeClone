import React from 'react';
import styled from "styled-components";


const VideoPresenter = ({video}) => {
    return ( 
    <div className='vidpresenter'>
        <img src={video.snippet.thumbnails.default.url} alt=""/>
        <h4>{video.snippet.title}</h4>
    </div> );
}
 
export default VideoPresenter;

