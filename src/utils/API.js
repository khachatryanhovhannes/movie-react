const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTgwMTE1MDIxODEzOTM1NjBjMjk5YjdlZGY1MzBmMyIsInN1YiI6IjY0ZTVlMGE3MWZlYWMxMDBmZTViNTM3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0oK1wRn2gnIENM7NuAn9_rT1302TMZsAig2k7pJdZXc'
    }
};

async function getMovies(page = 1) {
    return await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
}

async function getGanre(path){
    return await fetch(`https://api.themoviedb.org/3/genre/movie/list`, options)
}

async function searchMovie(searchText, page){
    return await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&page=${page}`, options)
}

async function getSingleMovie(id){
    return await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
} 

async function getFilmsWithGenre(genreId, page){
    return await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`, options)
}

export {getMovies, searchMovie, getSingleMovie, getGanre, getFilmsWithGenre}

