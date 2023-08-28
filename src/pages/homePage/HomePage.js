import { Link } from "react-router-dom";
import { getGanre } from "../../utils/API";
import { useEffect, useState } from "react";
import styles from './HomePage.module.css'


export default function HomePage() {
    const [genres, setGenres] = useState([])


    useEffect(() => {
        getGanre()
            .then(res => res.json())
            .then(res => setGenres(res.genres))
    }, [])

    console.log(genres)
    return (
        <div>
            <h1 className={styles.welcomeText}>Welcome to the best movie webSite
                <br />
                You can search film, choose on the all films, or find in genres
            </h1>
            <Link className={styles.AllFilms} to={`/page/1`}>All Films </Link>

            <div className={styles.filmWithGanres}>
                <h1>Film With Ganres</h1>
                <div className={styles.filmGanres}>
                    {
                        genres.length >= 0 && genres.map((genre) => {
                            return (
                                <Link className={styles.linkGenres} key={genre.id} to={`/genre/${genre.id}/page/1`}>
                                    {genre.name}
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            {

            }
        </div>
    )
}