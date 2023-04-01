import axios from 'axios';
import React, { useState, useEffect } from 'react';


const RelatedVideos = () => {
    const [videos, setVideos] = useState([]) 
    
    // useEffect(() => {
    //     getVideos();
    // }, []);

    async function getVideos() {
        const response = await axios.fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&maxResults=5&relatedToVideoId=HmjUKMTOKig");
        console.log(response.data)
        setVideos(response.data)
        }

    return (
        <div>
            <iframe id="player" type="text/html" width="325" height="200"
        src="https://www.youtube.com/embed/yutKIlyV7Ik"></iframe>
        </div>
    )
};

export default RelatedVideos
