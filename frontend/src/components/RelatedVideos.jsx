import React, { useState } from 'react';
import axios from 'axios';


const RelatedVideos = () => {
    const [videos, setVideos] = useState([]) 
    
    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search?type=video&relatedToVideoId=HmjUKMTOKig&key=AIzaSyABnENHL5ywj19HkbsYXJoj_7GEAOSo9fo&part=snippet");
        showVideos(response.data)
        }

        return (
            <h1>Commet</h1> 
        )
};
    


export default RelatedVideos

