import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {
let navigate = useNavigate();
return (
    <>
    <button onClick={()=>{navigate(`/`)}}>Back</button>
    <Outlet/>
    </>
)
}
export default MoviesPage;
