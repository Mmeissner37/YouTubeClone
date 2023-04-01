import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos";


const SearchPage = () => {
    const [videos, setVideos] = useState([]);

    // function searchByKeyword() {
    //     var results = YouTube.Search.list('id,snippet', {q: '', maxResults: 5});
    //     for(var i in results.items) {
    //         var item = results.items[i];
    //         Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    //     }
    //     return (searchByKeyword(setVideos))
    // }


    return (
        <div>
            <h3>Let's see some Videos!</h3>
            <RelatedVideos />
        </div>
        
        
    )
}

export default SearchPage;
