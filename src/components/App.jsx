import { Routes, Route,Link, Navigate  } from "react-router-dom";
import HomePage from "./HomePage/HomePage"
import Cast  from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./MoviesPage/MoviesPage";
import FetchData from "services/FetchData";

// const FetchMovies =FetchData();

export const App = () => {
  return (
    <>
    <Routes>
      <Route path ="/" element ={ <HomePage/>}>
        {/* <Route index element = {<Navigate to = "/movies"/>}/> */}
        <Route path = "movies" element = {<MoviesPage/>}/>
      </Route>
    </Routes>
    </>
  );
};
