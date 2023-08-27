import styles from "./SingleFilm.module.css"

export default function SingleFilm({film}){
    return (
        <>
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path?film.poster_path:null}`} alt="" />
            <p>Raiting: {film.vote_average}</p>
            <h1 className={styles.title}>{film.title}</h1>
        </>
    )
}