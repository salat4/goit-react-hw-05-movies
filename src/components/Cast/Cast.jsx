import * as API from "services/FetchData";
import { useParams} from "react-router-dom";
import { useEffect,useState,useRef } from "react";
import image from "../../image/broken-1.png"

const Cast = () =>{
    const [cast, setCast] = useState(null)
    let { movie_id } = useParams();
    const mounted = useRef();
    useEffect(()=>{
        async function FetchCast(){
            const movie = await API.FetchCast(movie_id)
            setCast(movie)
        }
        if(!mounted.current){
            mounted.current = true
              }
              else {
        FetchCast()
    }
    },[movie_id])
  return ( 
      <div>
      {cast &&(
            <ul>
            {cast.cast.map((person)=>(
                <li key = {person.id}>{
                    person.profile_path === null ?      
                    <img src={image} alt = "" width="200"></img>  :
                    <img src = {`https:image.tmdb.org/t/p/w500/${person.profile_path}`} alt = "" width="200"/>

                }
                    <p>{person.name}</p>
                    <p>Character : {person.character}</p>
                </li>
            ))}
        </ul>
          )
      }
      </div>
     
  )
}
export default Cast