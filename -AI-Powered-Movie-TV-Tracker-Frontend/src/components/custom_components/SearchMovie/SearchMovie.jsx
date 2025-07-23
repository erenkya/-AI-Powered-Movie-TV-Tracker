import React from "react";
import { useState, useEffect } from "react";
import { searchMovies } from "../../../api/Movie_API";
import { Spinner } from "@chakra-ui/react";
import MovieCard from "../MovieCard";
import styles from "./SearchMovie.module.css";

const SearchMovie = (props) => {
    const [movies, setMovies] = useState([]);
    const [nextPageMovies, setNextPageMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const pageNumber = parseInt(props.page, 10) || 1;
    const searchText = props.searchText || "";
    useEffect(() => {
        setLoading(true);
        searchMovies(searchText, pageNumber).then((movies) => {
            setMovies(movies);
        });

        setLoading(false);
    }, [searchText]);
    useEffect(() => {
        setLoading(true);

        searchMovies(searchText, pageNumber + 1).then((nextPageMovies) => {
            setNextPageMovies(nextPageMovies);
        });

        setLoading(false);
    }, [searchText]);

    if (loading) {
        return (
            <div>
                <Spinner size="xl" />
            </div>
        );
    }

    if (movies.length === 0) {
        return (
            <div>
                <h2>No movies found for {searchText}</h2>
            </div>
        );
    }

    return (
        <div className={styles.moviesContainer}>
            {movies.map((movie, index) => (
                <div className={styles.movieContainer}>
                    <MovieCard key={index} movie={movie} titleSize={"2xl"} ratingSize={"lg"} />
                </div>
            ))}
        </div>
    );
};

export default SearchMovie;
