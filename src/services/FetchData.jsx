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
        const response = await axios.get(`/movie/${movie_id}?api_key=515070e14c853494df330daa7406d141&language=en-US`,movie_id);
        return response.data;
    } catch (error) {
        console.error(error);
      }
}
export const FetchCast = async(movie_id) =>{
    try {
        const response = await axios.get(`/movie/${movie_id}/credits?api_key=515070e14c853494df330daa7406d141&language=en-US`,movie_id);
        return response.data;
    } catch (error) {
        console.error(error);
      }
}
export const FetchRewiews = async(movie_id) =>{
    try {
        const response = await axios.get(`/movie/${movie_id}/reviews?api_key=515070e14c853494df330daa7406d141&language=en-US`,movie_id);
        return response.data;
    } catch (error) {
        console.error(error);
      }
}
export const FetchSearch = async(query) =>{
    try {
        const response = await axios.get(`/search/movie?api_key=515070e14c853494df330daa7406d141&language=en-US&query=${query}&page=1&include_adult=false`,query);
        return response.data;
    } catch (error) {
        console.error(error);
      }
}
