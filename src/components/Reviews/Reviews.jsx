import * as API from "services/FetchData";
import { useParams} from "react-router-dom";
import { useEffect,useState } from "react";

const Reviews = () =>{
    const [rewiews, setRewiews] = useState(null)
    let { movie_id } = useParams();
    useEffect(()=>{
        async function FetchRewiews(){
            const movie = await API.FetchRewiews(movie_id)
            setRewiews(movie)
        }
        FetchRewiews()
    },[movie_id])
    console.log(rewiews)
    return(
        <div>
            {rewiews&&(
                 <ul>
                    {rewiews.results.length === 0 ? <p>We don`t have any rewiews for this movie</p>
                    :
                    rewiews.results.map((rewiew)=>(
                        <li>
                            <p>Author : {rewiew.author}</p>
                            <p>
                                {rewiew.content}
                            </p>
                        </li>
        ))
                    }
                 {}
        </ul>
            )}
           
        </div>
    )
   
}
export default Reviews;