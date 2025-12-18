"use client"
import React from "react";
import {useEffect,useState} from "react";
import FavoriteMovieDetailType from "@/types/FavoriteMovieDetailType";

type Props = {
	movie : FavoriteMovieDetailType
};

const MovieCard =({movie} : Props)=>{

	return(
		<div>
			MovieCard {movie.movieName}
		</div>
	)
}

export default MovieCard;