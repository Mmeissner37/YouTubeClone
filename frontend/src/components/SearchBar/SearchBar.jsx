import React, {useEffect, useState} from 'react';

import { Link } from "react-router-dom";



const SearchBar  = () => {
    const [video, setVideo] = useState([]);
    const [searchInput, setSearchInput] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        filterVideos(searchInput)
    }

    function filterVideos(searchInput) {
        let filteredResults = video.filter((el) =>{
            if (el.video.snippet.title.includes(searchInput)) {
                return true;
            }
        })
        setVideo(filteredResults)
    }

    return (
        <div className='container'>
            <h2>Welcome!</h2><br></br>
            <div className='searchbar'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>Search for Videos</label>
                    <input onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder='Search' /><br></br>
                </form>
                <Link to="/searchpage">Show More Videos</Link> 
            </div>
        </div>
    )
}

export default SearchBar;