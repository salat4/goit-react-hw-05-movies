import * as API from "services/FetchData";
import { useParams,Link,Outlet,useNavigate} from "react-router-dom";
import { useEffect,useState,useRef } from "react";
import image from "../../image/broken-1.png"
import style from "./MovieDetailsPage.module.css"
const MovieDetailsPage = () =>{
    const [movie, setMovie] = useState(null)
    let { movie_id } = useParams();
    const mounted = useRef();
useEffect(()=>{
    async function FetchDetails(){
        const movie = await API.FetchDetails(movie_id)
        setMovie(movie)
    }
    if(!mounted.current){
        mounted.current = true
          }
          else {
    FetchDetails()
          }
},[movie_id])
let navigate = useNavigate();

return(
    <div >
        
        {movie &&(
            <div >
                  <button onClick={()=>{navigate(`/`)}}>Back</button>
                <div className={style.top__div}>
                    {movie.poster_path === null ?
                     <img src={image} alt = "" width="200"></img>  :
                     <img src ={`https:image.tmdb.org/t/p/w500/${movie.poster_path}`} alt = {movie.title} width = "300"/> 
                     }
                  
            <div className={style.details}>
                <h1>{movie.title}</h1>
                <p>User Score : {movie.vote_average*10}%</p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres</h2>
                <ul className={style.list}>
                {movie.genres.map((genre)=>(
                    <li key ={genre.id} className ={style.list__item}>{genre.name}</li>
                ) )} 
                </ul>
                
                    
               </div>
                </div>
                    <p>
                        Additional information
                    </p>
                    <div>
                        <Link to = {{
                    pathname:`/movies/${movie.id}/cast`      
                    }
                    } className = {style.cast} key = {movie.id}>Cast
                    </Link>


                    <Link to = {{
                    pathname:`/movies/${movie.id}/reviews`      
                    }
                    } key = {movie.id+1}>Reviews
                    </Link>
                    </div>
                        <Outlet/>
                        </div>
                    )}
        
    </div>
)
}
export default MovieDetailsPage;