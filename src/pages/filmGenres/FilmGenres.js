import { useEffect, useState } from "react";
import { useNavigate, useParams , Link } from "react-router-dom";
import SingleFilm from "../../components/singleMovie/SingleFilm";
import ReactPaginate from "react-paginate";
import { getFilmsWithGenre } from "../../utils/API";
import styles from "./FilmGenres.module.css"

export default function FilmGenres() {

    const [genreFilmDate, setGenreFilmDate] = useState({})
    const { genreId, page } = useParams()
    const [pageNumber, setPageNumber] = useState(+page)
    const navigate = useNavigate()
    useEffect(() => {
        navigate(`/genre/${genreId}/page/${pageNumber}`)
        getFilmsWithGenre(genreId, page)
            .then(res => res.json())
            .then(res => {
                setGenreFilmDate(res)
            })
    }, [pageNumber, page])


    const handleGetPageResult = (evt) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setPageNumber(evt.selected + 1)
    }
    return (

        <div>
            <h1></h1>

            <div className={styles.films}>
                {
                    genreFilmDate.results && genreFilmDate.results.map((film) => {
                        return (
                            <Link key={film.id}
                                className={styles.singleFIlm}
                                to={`/movie/${film.id}`}
                            >
                                <SingleFilm film={film} />
                            </Link>
                        )
                    })
                }
            </div>

            {
                genreFilmDate && <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={genreFilmDate.total_pages}
                    containerClassName={styles.paginationContainer}
                    activeClassName={styles.activePage}
                    onPageChange={handleGetPageResult}
                    pageRangeDisplayed={5}
                    forcePage={+page - 1}
                />

            }

        </div>
    )



}