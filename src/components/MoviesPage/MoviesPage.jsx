import { useNavigate } from "react-router-dom";

const MoviesPage = () => {
let navigate = useNavigate();
return (
    <>
    <button onClick={()=>{navigate(`/`)}}>Back</button>
    </>
)
}
export default MoviesPage;
