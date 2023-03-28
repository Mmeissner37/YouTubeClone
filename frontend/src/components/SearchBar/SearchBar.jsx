import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const SearchBar  = () => {
    const [video, setVideo] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label>Search for Videos</label>
                <input type='text' placeholder='Search' /><br></br>
                <Link to ="/searchvideos">Search</Link> 
            </form>
        </div>
    )
}

export default SearchBar;