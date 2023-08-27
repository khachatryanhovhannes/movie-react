import { useState, useEffect } from "react";
import SingleFilm from "../../components/singleMovie/SingleFilm"
import styles from "./MovieHomePage.module.css"
import { getMovies } from "../../utils/API";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function MovieHomePage() {
    const [filmsData, setFilmsData] = useState(new Array)
    const navigate = useNavigate()
    const { page } = useParams()
    const [pageNumber, setPageNumber] = useState(+page)
    useEffect(() => {
        navigate(`/page/${pageNumber}`)
        getMovies(page)
            .then(response => response.json())
            .then(response => {
                setFilmsData(response)
            })
            .catch(err => console.error(err));
        console.log("pppppppppppppppppppp", page)
        console.log("ppppppppppppppppppppNNNNNNNNNNNNNN", pageNumber)
    }, [pageNumber, page])

    useEffect(() => {
        // window.location.reload()
    }, [])

    const handleGetPageResult = (evt) => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setPageNumber(evt.selected + 1)
    }



    return (
        <div>

            <div className={styles.films}>
                {
                    filmsData.results && filmsData.results.map((film) => {
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
                filmsData && <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    breakLabel={"..."}
                    pageCount={filmsData.total_pages}
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