import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'


const SearchBar  = (getVideos, search, setSearch) => {
    const [video, setVideo] = useState([]);
    const [searchInput, setSearchInput] = useState([]);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        getVideos();
        navigate('/morevids');
    }

    // function filterVideos(searchInput) {
    //     let filteredResults = video.filter((el) =>{
    //         if (el.video.snippet.title.includes(searchInput)) {
    //             return true;
    //         }
    //     })
    //     setVideo(filteredResults)
    // }

    return (
        <div className='container'>
            <div className='searchbar'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>Search for Videos </label>
                    <input type='search' placeholder='Search' /><br></br>
                    {/* <input onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder='Search' /> */}
                </form><br></br>
                {/* <button onClick={(getVideos) => navigate('/morevids')}>Search</button>  */}
                <button type ='submit' className='search-btn'>Search</button> 
            </div><br></br>
        </div>
    )
}

export default SearchBar;