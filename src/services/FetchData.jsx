import axios from "axios";
// import React, {useState, useEffect} from "react"

axios.defaults.baseURL = "https://api.themoviedb.org/3"



export const FetchTrend = async() =>{
    try {
        const response = await axios.get('/trending/movie/day?api_key=515070e14c853494df330daa7406d141');
        return response.data;
    } catch (error) {
        console.error(error);
      }
}
    

export const FetchDetails = async(movie_id) =>{
    try {
        const response = await axios.get(`/movie/${movie_id}?api_key=515070e14c853494df330daa7406d141&language=en-US`);
        return response.data;
    } catch (error) {
        console.error(error);
      }
}