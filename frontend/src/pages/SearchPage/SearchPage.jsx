import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";


const SearchPage = () => {
    const [video, setVideo] = useState([])

    return (
        <div className="container">
            <h3>Welcome! </h3>
            <br></br>
            <SearchBar />

        </div>
    )
}

export default SearchPage;
