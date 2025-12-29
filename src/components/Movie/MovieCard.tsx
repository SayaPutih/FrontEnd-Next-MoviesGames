"use client"
import React from "react";
import {useEffect,useState} from "react";
import FavoriteMovieDetailType from "@/types/FavoriteMovieDetailType";
import { Star } from 'lucide-react';

type Props = {
	movie : FavoriteMovieDetailType
};

const MovieCard =({movie} : Props)=>{

	const applyRating =(rating : number)=>{
		if(rating === 10) return "bg-green-900 text-green-500"
		if(rating > 8) return "bg-green-900/50 text-green-500/50"
		if(rating > 7) return "bg-yellow-900 bg-yellow-500"
		if(rating > 4) return "bg-orange-500 text-orange-900"
		return "bg-red-500 text-red-900"
	}

	return(
		<div 
			className={`flex flex-col bg-third rounded-md flex flex-row items-center justify-center pb-4 px-4 shadow-2xl`} 
			style={{
				// backgroundColor: movie.firstColor ? movie.firstColor : "gray",
				boxShadow: false //movie.firstColor
					? `0 4px 20px ${movie.firstColor}`
					: "0 4px 10px gray",
				}}>
			<img className="w-full h-full object-cover aspect-video min-h-[120]xmax-h-[500] mt-5 xmax-w-[300] w-[100%]"
				src={movie.imageUrl ? `https://localhost:7160/api/v1/Files/get-file-WithExtention?fileName=${movie.imageUrl}` 
				: 
				"https://placehold.co/400x300"} 
			/>
			
			<div className="text-start w-full font-bold my-2 gap-2 flex justify-between my-4">
				<h1 style={{color : movie.secondColor? movie.secondColor : "black"}}>{movie.movieName}</h1>
				<p >
					<span className={`${applyRating(movie.rating)} py-1 rounded-md  px-2`}>{movie.rating}</span></p>
			</div>
			
			<div className="flex w-full xborder-2">
				{[...Array(Math.floor(movie.rating))].map((_,i)=>(
					<Star className="text-yellow-900 fill-yellow-900 " key={i} />
				))}
				{[...Array(10 - Math.floor(movie.rating))].map((_,i)=>(
					<Star className="" key={i} />
				))}
			</div>
		</div>
	)
}

export default MovieCard;