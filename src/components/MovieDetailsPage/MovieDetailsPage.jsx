import { FetchDetails } from "services/FetchData";

let moviesObj = [];

const MovieDetailsPage = ( {movies})=>{
    console.log(movies)
    // FetchDetails(movies.id).then((response)=>moviesObj = response)

    const detail = moviesObj.results

return(
    <div>
        <p>zxc</p>
    </div>
)
}
export default MovieDetailsPage;