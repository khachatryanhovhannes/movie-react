import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Header.module.css"

export default function Header() {
    const [searchText, setSearchText] = useState("")
    const navigate = useNavigate()

    const handleSearchChange = (evt) => {
        setSearchText(evt.target.value)
    }


    const handleSearchResult = () => {
        if(searchText){
            navigate(`/movies/${searchText}/page/1`)
            setSearchText('')
        }
        else{
            navigate(`/`)
        }
    }

    function handleSearchKeyDown(event) {
        if (event.key === "Enter") {
            handleSearchResult()
        }

    }

    return (
        <header className={styles.header} onKeyDown={handleSearchKeyDown}>
            <Link to={`/`} className={styles.logo}>
            <h1>The TMBD Movie API</h1></Link>
            <div className={styles.search}>
                <input type="search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={evt => { handleSearchChange(evt) }}
                />
                <button
                    onClick={evt=>{
                        evt.preventDefault()
                        handleSearchResult()
                    }}
                >Search</button>
            </div>
        </header>
    )
}