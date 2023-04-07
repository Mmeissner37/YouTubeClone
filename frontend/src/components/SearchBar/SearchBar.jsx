import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const SearchBar  = () => {
    const [video, setVideo] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className='container'>
            <h2>Welcome!</h2><br></br>
            <div className='searchbar'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>Search for Videos</label>
                    <input type='text' placeholder='Search' /><br></br>
                </form>
                <Link to="/searchpage">Search</Link>
            </div>
        </div>
    )
}

export default SearchBar;