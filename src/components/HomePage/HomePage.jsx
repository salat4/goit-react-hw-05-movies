import { FetchData } from "services/FetchData";
import { Link  } from "react-router-dom";
//import styles from "./HomePage.module.css"
import styled from 'styled-components';

let moviesObj = [];
const Div = styled.div`
display:flex;
flex-direction:column ;
`
// const Div = styled

FetchData().then((response)=>moviesObj = response)
const HomePage = () =>{
const movies = moviesObj.results
return(
<div>
    <Link to = "/">Home</Link>
    <Link to = "/movies">Movies</Link>
    <h1> Trending today</h1>
    {/* <p>{}</p> */}
    <Div>
    {movies.map((movie) =>(
        <Link to = {{
           pathname:`/movies/${movie.id}`      
        }
        } key = {movie.id}>{movie.title}
        </Link>
    ))}
    </Div>
</div>

)

}
export default HomePage