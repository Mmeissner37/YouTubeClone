import React, {useEffect, useState} from 'react';
import axios from 'axios';


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
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;