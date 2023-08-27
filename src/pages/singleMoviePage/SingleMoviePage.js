import styles from './SingleMoviePage.module.css'
import { useParams } from 'react-router-dom'

export default function SingleMoviePage(){
    const {id} = useParams()

    console.log(id)

}