import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import useAuth from "../../hooks/useAuth";

import axios from "axios";


const SearchPage = () => {
    const [user, token] = useAuth();
    const [video, setVideo] = useState([]);

    useEffect(() => {
        const searchVideo = async () => {
            try {
                let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=cats&key={AIzaSyABnENHL5ywj19HkbsYXJoj_7GEAOSo9fo}&part=snippet&type=video&maxresults=5/");
                setVideo(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
        };
        searchVideo();
    });

    return (
        <div className="container">
            <h3>Welcome {user.username}! </h3>
            <br></br>
            <SearchBar />

        </div>
    )
}

export default SearchPage;
