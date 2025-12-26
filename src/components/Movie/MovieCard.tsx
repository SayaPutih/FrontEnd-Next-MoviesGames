"use client"
import React from "react";
import {useEffect,useState} from "react";
import FavoriteMovieDetailType from "@/types/FavoriteMovieDetailType";
import { Star } from 'lucide-react';

type Props = {
	movie : FavoriteMovieDetailType
};

const MovieCard =({movie} : Props)=>{

	return(
		<div className="flex flex-col">
			<img className="w-full h-full object-cover aspect-video min-h-[120]xmax-h-[500] mt-5 max-w-[300]"
				src={movie.imageUrl ? `https://localhost:7160/api/v1/Files/get-file-WithExtention?fileName=${movie.imageUrl}` 
				: 
				"https://placehold.co/400x300"} 
			/>
			<h1>{movie.movieName}</h1>
			<p>{movie.rating}</p>
			
			<div className="flex">
				{[...Array(Math.floor(movie.rating))].map((_,i)=>(
					<Star key={i} />
				))}
			</div>
		</div>
	)
}

export default MovieCard;