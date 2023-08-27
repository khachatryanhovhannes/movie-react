import { useEffect , useState} from "react";
import { useParams } from "react-router-dom";
import { searchMovie } from "../../utils/API";
import SingleFilm from "../../components/singleMovie/SingleFilm";
import ReactPaginate from "react-paginate";

import styles from "./SearchedResult.module.css"

export default function SearchedResult() {
    const [searchFilmsData, setSearchFilmsData] = useState(new Array)
    const { searchText } = useParams()
    console.log(searchText)
    useEffect(() => {
        searchMovie(searchText)
            .then(res => res.json())
            .then(res => {
                setSearchFilmsData(res)
            })
    }, [searchText])

    const handleGetPageResult = (evt) => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        searchMovie(searchText, evt.selected + 1)
        .then(response => response.json())
        .then(response => {
            setSearchFilmsData(response)
        })
        .catch(err => console.error(err));
        return evt.selected + 1
 
    }
    return(

        <div>
            <h1>Search results "{searchText}"</h1>

            <div className={styles.films}>
                {
                    searchFilmsData.results && searchFilmsData.results.map((film) => {
                        return (
                            <div key={film.id} className={styles.singleFIlm} >
                                <SingleFilm film={film} />
                            </div>
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
                />

            }

        </div>
    )



}