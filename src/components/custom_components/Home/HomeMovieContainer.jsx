import React from "react";
import { useState, useEffect } from "react";
import { getDefaultMovies } from "../../../api/Movie_API";
import styles from "./HomeMovieContainer.module.css";

import MovieCard from "../MovieCard";

function HomeMovieContainer() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getDefaultMovies(15).then((movies) => setMovies(movies));
    }, []);

    const mainMovies = movies.slice(0, 3);
    const otherMovies = movies.slice(3, 15);

    return (
        <>
            <div className={styles.mainCartContainer}>
                {mainMovies.map((movie) => (
                    <MovieCard titleSize={"2xl"} ratingSize={"lg"} movie={movie} key={movie.imdbID} />
                ))}
            </div>
            <div className={styles.otherCartContainer}>
                {otherMovies.map((movie) => (
                    <MovieCard titleSize={"sm"} ratingSize={"sm"} movie={movie} key={movie.imdbID} />
                ))}
            </div>
        </>
    );
}

export default HomeMovieContainer;
