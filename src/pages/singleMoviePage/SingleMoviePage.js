import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../../utils/API'
import styles from './SingleMoviePage.module.css'
import { useEffect, useState } from 'react'

export default function SingleMoviePage() {
    const [singleData, setSingleData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getSingleMovie(id)
            .then(res => res.json())
            .then(res => setSingleData(res))

    }, [])


    console.log(singleData)

    return (
        <div className={styles.singleMoviePage}>
            <h1>{singleData.title}</h1>
            <h2>{singleData.original_title}</h2>
            <h4>{singleData.overview}</h4>
            <div className={styles.filmDescription}>
                <img src={`https://image.tmdb.org/t/p/w500/${singleData.poster_path}`} alt="" />
                <div>
                    <p><span>Original language: </span>{singleData.original_language}</p>
                    <p><span>homepage: </span><a href={singleData.homepage} target='_blank'> {singleData.homepage}</a></p>
                    <p><span>Release date: </span>{singleData.release_date}</p>
                    <p><span>Vote average: </span>{singleData.vote_average} ({singleData.vote_count} vote)</p>
                    <p><span>Budget: </span>{singleData.budget}</p>
                    <p><span>Status: </span>{singleData.status}</p>
                    {
                        singleData.genres && <p><span>Genres:</span> {singleData.genres.map((gen, index) => (index === singleData.genres.length - 1)? gen.name + "" : gen.name + ", ")} </p>
                    }
                    {
                        singleData.production_companies && <div className={styles.proComps}><span>Production companies:</span> <ul> {singleData.production_companies.map((com, index) => <li key={index}>{com.name}</li>)} </ul>  </div>
                    }
                    {
                        singleData.production_countries && <p><span>Production countries:</span> {singleData.production_countries.map((country, index) => (index === singleData.production_countries.length - 1)? country.name + "" : country.name + ", ") }</p>
                    }
                </div>
            </div>
        </div>
    )

}