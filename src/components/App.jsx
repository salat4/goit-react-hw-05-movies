import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(()=> import("./HomePage/HomePage"))
const Cast = lazy(()=> import("./Cast/Cast"))
const Reviews = lazy(()=> import("./Reviews/Reviews"))
const MovieDetailsPage = lazy(()=> import("./MovieDetailsPage/MovieDetailsPage"))
const MoviesPage = lazy(()=> import("./MoviesPage/MoviesPage"))
const AppBar = lazy(()=> import("./AppBar/AppBar"))
// const NotFound = lazy(()=> import("./NotFound/NotFound"))

// import FetchTrend from "services/FetchData";

// const FetchMovies =FetchData();

export const App = () => {

 
  return (
    <>

    
 <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    <Route path="/" element={<AppBar />} >
    <Route index element={<HomePage />} />
        <Route path = "/movies" element = {<MoviesPage/>}/>
        <Route path="movies/:movie_id/*" element = {<MovieDetailsPage/>}>
          <Route path = "cast" element = {<Cast/>}/>
          <Route path = "reviews" element = {<Reviews/>}/>
        </Route>
      </Route>
      {/* <Route path="*" element={<NotFound />} />   */}
    </Routes>
    </Suspense>

</>
  );
};
