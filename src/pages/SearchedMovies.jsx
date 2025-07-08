import React from "react";

import Navbar from "../components/custom_components/Navbar";
import SearchMovie from "../components/custom_components/SearchMovie/SearchMovie";
import { useParams } from "react-router-dom";

function SearchedMovies() {
    const { searchText, page } = useParams();

    return (
        <div>
            <Navbar />
            <SearchMovie searchText={searchText} page={page} />
        </div>
    );
}

export default SearchedMovies;
