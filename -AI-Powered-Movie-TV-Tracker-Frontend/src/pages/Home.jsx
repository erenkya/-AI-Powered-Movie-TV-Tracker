import React from "react";
import Navbar from "../components/custom_components/Navbar";
import HomeMovieContainer from "../components/custom_components/Home/HomeMovieContainer";

function Home() {
    return (
        <div>
            <Navbar />
            <HomeMovieContainer />
        </div>
    );
}

export default Home;
