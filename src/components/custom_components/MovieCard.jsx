import React from "react";
import { useState } from "react";
import styles from "./MovieCard.module.css";
import { Box, Button, Card, Image, Badge, RatingGroup } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

function MovieCard({ movie, titleSize, ratingSize }) {
    const [value, setValue] = useState(0);
    return (
        <Card.Root className={styles.card} maxW="sm" overflow="hidden" key={movie.imdbID}>
            <Image src={movie.Poster} alt={movie.Title} />
            <div className={styles.badgeContainer}>
                <Badge className={styles.badge} colorPalette="orange">
                    {movie.Year}
                </Badge>
                <Badge className={styles.badge} colorPalette="green">
                    {movie.Type}
                </Badge>
            </div>
            <Card.Title className={styles.cardTitle} textStyle={titleSize}>
                {movie.Title}
            </Card.Title>
            <div className={styles.ratingContainer}>
                <RatingGroup.Root size={ratingSize} count={5} value={value} onValueChange={(e) => setValue(e.value)}>
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                </RatingGroup.Root>
            </div>
        </Card.Root>
    );
}

export default MovieCard;
