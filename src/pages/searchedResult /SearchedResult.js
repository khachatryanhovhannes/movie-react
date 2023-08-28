import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { searchMovie } from "../../utils/API";
import SingleFilm from "../../components/singleMovie/SingleFilm";
import ReactPaginate from "react-paginate";
import styles from './SearchedResult.module.css'

export default function SearchedResult() {
    const [searchFilmsData, setSearchFilmsData] = useState(new Array)
    const { searchText, page } = useParams()
    const [pageNumber, setPageNumber] = useState(+page)
    const navigate = useNavigate()
    useEffect(() => {
        navigate(`/movies/${searchText}/page/${pageNumber}`)

        searchMovie(searchText, page)
            .then(res => res.json())
            .then(res => {
                setSearchFilmsData(res)
            })
    }, [pageNumber, page])


    const handleGetPageResult = (evt) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setPageNumber(evt.selected + 1)
    }
    return (

        <div>
            <h1>Search results "{searchText}"</h1>

            <div className={styles.films}>
                {
                    searchFilmsData.results && searchFilmsData.results.map((film) => {
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
                searchFilmsData && <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={searchFilmsData.total_pages}
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