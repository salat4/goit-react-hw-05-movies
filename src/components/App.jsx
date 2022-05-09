import { Routes, Route,NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
import styles from './App.module.css'
const HomePage = lazy(()=> import("./HomePage/HomePage"))
const Cast = lazy(()=> import("./Cast/Cast"))
const Reviews = lazy(()=> import("./Reviews/Reviews"))
const MovieDetailsPage = lazy(()=> import("./MovieDetailsPage/MovieDetailsPage"))
const MoviesPage = lazy(()=> import("./MoviesPage/MoviesPage"))
const NotFound = lazy(()=> import("./NotFound/NotFound"))

// import FetchTrend from "services/FetchData";

// const FetchMovies =FetchData();

export const App = () => {

  let activeStyle = {
    color: "red",
  };
  return (
    <>
    <NavLink to = "/" className={styles.home} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Home</NavLink>
    <NavLink to = "/movies" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Movies</NavLink>
 <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path ="/" element ={ <HomePage/>}/>
        <Route path = "movies" element = {<MoviesPage/>}/>
        <Route path="movies/:movie_id" element = {<MovieDetailsPage/>}>
          <Route path = "cast" element = {<Cast/>}/>
          <Route path = "reviews" element = {<Reviews/>}/>
      </Route>
      <Route path="*" element={<NotFound />} />  
    </Routes>
    </Suspense>
    </>
  );
};
