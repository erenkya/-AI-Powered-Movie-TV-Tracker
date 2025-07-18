const defaultKeywords = ["batman", "spider", "king", "love", "war", "alien"];

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_OMDB_API_BASE_URL;

export async function getDefaultMovies(movie_number = 12) {
    const allMovies = [];

    for (let keyword of defaultKeywords) {
        const url = `${BASE_URL}?apikey=${API_KEY}&s=${keyword}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "True") {
            allMovies.push(...data.Search.slice(0, 3)); // her kelimeden 3 film
        }
    }

    return allMovies.slice(0, movie_number); // Toplam max 12 film döndür
}

export async function searchMovies(searchText, page = 1) {
    const allMovies = [];
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${searchText}&page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
        allMovies.push(...data.Search);
    }
    return allMovies;
}
