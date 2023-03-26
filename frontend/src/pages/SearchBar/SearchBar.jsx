import React, {useEffect, useState} from 'react';
import axios from 'axios';


const SearchBar  = ({searchForVideo}) => {
    const [video, setVideo] = useState([]);
    const [searchVideo,setSearchVideo] = useState("");

    useEffect(() => {
        filterVideo();
    })

    function handleSubmit(event) {
        event.preventDefault();
    }

    async function searchVideo(search) {
        let response = await axios.get('', search);
        searchForVideo()
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label>Search for Videos</label>
                <input type='text' placeholder='Search' /><br></br>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}